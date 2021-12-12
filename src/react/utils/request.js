import axios from "axios";
import sanitized from "sanitized";

async function processRequest(method, url, option = {}) {
  const {
    ignore,
    authenticate = true,
    ignoreErrorLog,
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
    headers = {},
    ...config
  } = option;

  if (!url) {
    console.warn("Missing 'url' for request.");
  } else if (ignore === true) {
    console.warn(`Ignoring request to ${url}.`);
  } else if (authenticate && !axios.defaults.headers.common.Authorization) {
    const warning =
      "Failed to authenticate request. Authorization header missing.";
    console.warn(warning);
  } else {
    try {
      // -- ON REQUEST START --

      let cancelToken;

      if (!unmounted) {
        if (onStart) onStart();
        if (setPending) setPending(true);
        if (setError) setError();
        if (activeCancelSource && activeCancelSource.cancel)
          activeCancelSource.cancel();
        const newCancelSource = axios.CancelToken.source();
        if (setCancelSource) setCancelSource(newCancelSource);
        cancelToken = newCancelSource.token;
      }

      // -- SEND REQUEST --

      const response = await axios({
        method,
        url,
        headers,
        cancelToken,
        ...sanitized(config),
      });

      // -- ON REQUEST RESPONSE --

      if (!unmounted) {
        if (setData) setData(response.data);
        if (onSuccess) onSuccess(response.data);
      }

      return response.data;
    } catch (error) {
      // -- ON REQUEST ERROR --
      if (!unmounted && !axios.isCancel(error)) {
        if (setError) setError(error);
        if (onFail) onFail(error);
        if (!ignoreErrorLog) console.log(error.toString());
      }

      return error;
    } finally {
      // -- ON REQUEST FINISH --
      if (!unmounted) {
        if (setPending) setPending();
        if (onFinish) onFinish();
      }
    }
  }
}

export const request = {
  post: async (url, option) => await processRequest("POST", url, option),
  get: async (url, option) => await processRequest("GET", url, option),
  put: async (url, option) => await processRequest("PUT", url, option),
  delete: async (url, option) => await processRequest("DELETE", url, option),
};
