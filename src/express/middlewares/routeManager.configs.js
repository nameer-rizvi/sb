const apicacheMiddleware = require("./apicache");

// --starterKit-flag [set api route configs here]

// The route manager restricts access to only those api routes that are defined
// in the configs store here. It can be shaped any way you like, so long as there's
// a "path" and a "method" value, and it can be accessed by any proceeding middleware.

const routeManagerMiddlewareConfigs = [
  {
    path: "/",
    method: "GET",
    cache: apicacheMiddleware.CACHE.MAX,
  },
  {
    path: "/error",
    method: "POST",
    requiredParams: ["error"],
  },
  {
    path: "/initialize",
    method: "GET",
    authenticate: "bearerToken",
    // ignoreValidation: true,
    cache: apicacheMiddleware.CACHE.STALE,
  },
];

module.exports = routeManagerMiddlewareConfigs;
