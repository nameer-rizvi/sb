import { isObject } from "simpul";
import sanitized from "sanitized";

const URLQueryGenerate = (object) =>
  isObject(object)
    ? "?" + new URLSearchParams(sanitized(object)).toString()
    : "";

function URLQueryGet(key) {
  const entries = new URLSearchParams(window.location.search).entries();
  const params = {};
  for (let [entryKey, entryValue] of entries) {
    try {
      params[entryKey] = sanitized(JSON.parse(entryValue));
    } catch {
      params[entryKey] = sanitized(entryValue);
    }
  }
  return key ? params[key] : params;
}

function URLQuerySafe(dirty) {
  try {
    let clean = sanitized(dirty);
    if (clean) clean = decodeURIComponent(clean.replace("%", ""));
    return clean === "undefined" ? undefined : clean;
  } catch (error) {
    console.error(error);
    return;
  }
}

export const URLQuery = {
  generate: URLQueryGenerate,
  get: URLQueryGet,
  safe: URLQuerySafe,
};
