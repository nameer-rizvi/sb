import { useState, useEffect } from "react";
import { request } from "../util";

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

  const assignSetters = (option) => ({
    ...option,
    setPending,
    setData,
    setError,
    setCancelSource,
    setUnmounted,
  });

  const send = {
    post: async (url, option) => await request.post(url, assignSetters(option)),
    get: async (url, option) => await request.get(url, assignSetters(option)),
    put: async (url, option) => await request.put(url, assignSetters(option)),
    delete: async (url, option) =>
      await request.delete(url, assignSetters(option)),
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
