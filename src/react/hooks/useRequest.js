import { useState, useEffect } from "react";
import { request } from "../utils";

export function useRequest(props = {}) {
  const [pending, setPending] = useState(props.initialPending);

  const [data, setData] = useState(props.initialData);

  const [error, setError] = useState(props.initialError);

  const [cancelSource, setCancelSource] = useState({});

  const [unmounted, setUnmounted] = useState();

  useEffect(() => {
    return () => {
      if (!props.ignoreCleanup) {
        setUnmounted(true);
        if (cancelSource.cancel) cancelSource.cancel();
      }
    };
  }, [props.ignoreCleanup, cancelSource]);

  const assignSetters = (props2) => ({
    ...props2,
    setPending,
    setData,
    setError,
    setCancelSource,
    setUnmounted,
  });

  const send = {
    post: (props1, props2) => request.post(props1, assignSetters(props2)),
    get: (props1, props2) => request.get(props1, assignSetters(props2)),
    put: (props1, props2) => request.put(props1, assignSetters(props2)),
    delete: (props1, props2) => request.delete(props1, assignSetters(props2)),
  };

  return {
    pending,
    data,
    error,
    cancelSource,
    unmounted,
    send,
    ...assignSetters(),
  };
}
