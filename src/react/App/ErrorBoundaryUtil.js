import { URLQuery, request } from "../util";
import { isBooleanAny } from "simpul";

export function handleChunkLoadError() {
  const params = URLQuery.get();
  if (!isBooleanAny(params.reloaded)) {
    params.reloaded = true;
    window.location = window.location.pathname + URLQuery.generate(params);
  }
}

export function postErrorToServer(error) {
  const pathname = window.location.pathname + window.location.search;
  const message = error.message;
  const stack = error.stack;
  request.post("/error", { data: { error: { pathname, message, stack } } });
}
