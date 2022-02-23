const { CACHE } = require("./apicache");

// --starterKit-flag [set api route configs here]

// The route manager restricts access to only those api routes that are defined
// in the configs store here. It can be shaped any way you like, so long as there's
// a "route" and a "method" value included, and it can be accessed in any proceeding middleware.

const routeManagerMiddlewareConfigs = [
  {
    route: "/",
    method: "GET",
    cache: CACHE.MAX,
  },
  {
    route: "/error",
    method: "POST",
    authenticate: "bearerToken",
    requiredParams: ["error"],
  },
  {
    route: "/initialize",
    method: "GET",
    authenticate: "bearerToken",
    // ignoreValidation: true,
    cache: CACHE.STALE,
  },
];

module.exports = routeManagerMiddlewareConfigs;
