import { URLQuery } from "./URLQuery";

const pathnameIsParam = (path = "") => path && path.startsWith(":");

// ******
// ******
// ******

const pathnameMakeParam = (path = "") =>
  pathnameIsParam(path) ? path.substring(1) : path;

// ******
// ******
// ******

const pathnameSplit = (path) => path.split("/").filter(Boolean);

// ******
// ******
// ******

function pathnameJoin(pathSplits = [], tempParams = {}) {
  let joined = "";

  for (let pathSplit of pathSplits) {
    let join = pathnameIsParam(pathSplit)
      ? tempParams[pathnameMakeParam(pathSplit)]
      : pathSplit;

    if (join) {
      joined += "/" + join;
    } else break;
  }

  return joined || "/";
}

// ******
// ******
// ******

function pathnameMatch(pathSplits = [], pathSplits2 = []) {
  let iterations = Math.max(pathSplits.length, pathSplits2.length);

  let tempParams = {};

  let found = false;

  for (let i = 0; i < iterations; i++) {
    let pathSplit = pathSplits[i];

    let pathSplit2 = pathSplits2[i];

    if (pathnameIsParam(pathSplit2)) {
      tempParams[pathnameMakeParam(pathSplit2)] = URLQuery.safe(pathSplit);
    } else found = pathSplit2 === pathSplit;
  }

  return { tempParams, found };
}

// ******
// ******
// ******

export function pathnameMakeRoot(path, options = {}) {
  let rootPath = "";

  const pathSplits = pathnameSplit(path);

  for (let pathSplit of pathSplits) {
    let pathSplitIsParam = pathnameIsParam(pathSplit);

    let pathSplitParamName = pathnameMakeParam(pathSplit);

    let includePathSplitParamValue =
      pathSplitIsParam &&
      options.include &&
      options.include.includes(pathSplitParamName);

    let rootPathSplit = includePathSplitParamValue
      ? options.params && options.params[pathSplitParamName]
      : !pathSplitIsParam && pathSplit;

    if (rootPathSplit) {
      rootPath += "/" + rootPathSplit;
    } else break;
  }

  return rootPath || "/";
}

// ******
// ******
// ******

export const pathname = {
  isParam: pathnameIsParam,
  makeParam: pathnameMakeParam,
  split: pathnameSplit,
  join: pathnameJoin,
  match: pathnameMatch,
  makeRoot: pathnameMakeRoot,
};
