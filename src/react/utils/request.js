// On Axios vs. Fetch:
//   Research concludes that Axios is the better choice for the following reasons:
//     - Built-in XSRF protection.
//     - Request cancelation API.
//     - Interceptors.
//     - Wider browser support.

import { isString, isObject, isEnv } from "simpul";
import axios from "axios";
import sanitized from "sanitized";

function processRequest(method, props1, props2) {
  const url = (isString(props1) && props1) || (isObject(props1) && props1.url);

  const {
    ignore,
    unmounted,
    cancelSource: activeCancelSource,
    setCancelSource,
    setPending,
    setData,
    setError,
    onStart,
    onSuccess,
    onFail,
    onFinish,
    ...config
  } = [props1, props2].reduce(
    (reducer, props) => (isObject(props) ? { ...reducer, ...props } : reducer),
    {}
  );

  if (!url) {
    if (!isEnv.live) console.warn("Missing 'url' for request.");
  } else if (ignore === true) {
    if (!isEnv.live) console.warn(`Ignoring request to ${url}.`);
  } else {
    const handle = {
      start: () => {
        if (!unmounted) {
          if (onStart) onStart();
          if (setPending) setPending(true);
          if (setError) setError();
          if (activeCancelSource && activeCancelSource.cancel)
            activeCancelSource.cancel();
          const newCancelSource = axios.CancelToken.source();
          if (setCancelSource) setCancelSource(newCancelSource);
          return { cancelToken: newCancelSource.token };
        }
      },
      success: (response) => {
        if (!unmounted) {
          if (setData) setData(response.data);
          if (onSuccess) onSuccess(response.data);
        }
      },
      fail: (error) => {
        if (!unmounted && !axios.isCancel(error)) {
          if (setError) setError(error);
          if (onFail) onFail(error);
        }
      },
      finish: () => {
        if (!unmounted) {
          if (setPending) setPending();
          if (onFinish) onFinish();
        }
      },
    };

    if (config.params) delete config.params.reloaded;

    const { cancelToken } = handle.start();

    axios({ method, url, cancelToken, ...sanitized(config) })
      .then(handle.success)
      .catch(handle.fail)
      .finally(handle.finish);
  }
}

export const request = {
  post: (props1, props2) => processRequest("POST", props1, props2),
  get: (props1, props2) => processRequest("GET", props1, props2),
  put: (props1, props2) => processRequest("PUT", props1, props2),
  delete: (props1, props2) => processRequest("DELETE", props1, props2),
};
