// starterKit-flag [set api route configs here]

// The rout manager restricts access to only those api routes that are defined
// in the configs store here. It can be shaped any way you like, so long as there's
// a "route" and a "method" value included, and it can be used in any proceeding middleware.

const routeManagerMiddlewareConfigs = [
  {
    route: "/",
    method: "GET",
  },
  {
    route: "/initialize",
    method: "GET",
    authenticate: "bearerToken",
    // ignoreValidation: true,
  },
  {
    route: "/error",
    method: "POST",
    authenticate: "bearerToken",
    requiredValues: ["error"],
  },
];

module.exports = routeManagerMiddlewareConfigs;
