// starterKit-flag [set api route configs here]

const routeManagerMiddlewareConfigs = [
  {
    route: "/",
    method: "GET",
  },
  {
    route: "/initialize",
    method: "GET",
    authenticate: "bearerToken",
  },
  {
    route: "/error",
    method: "POST",
    authenticate: "bearerToken",
    requiredValues: ["error"],
  },
];

module.exports = routeManagerMiddlewareConfigs;
