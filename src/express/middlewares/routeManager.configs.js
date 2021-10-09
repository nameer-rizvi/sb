// Sample Config:
//
// {
//   route: "/",
//   method: "GET",
//   authenticate: true,
//   requiredValues: ["id"],
// }

const routeManagerMiddlewareConfigs = [
  {
    route: "/",
    method: "GET",
  },
  {
    route: "/initialize",
    method: "GET",
    authenticate: true,
  },
  {
    route: "/error",
    method: "POST",
    requiredValues: ["error"],
  },
  {
    route: "/health",
    method: "GET",
  },
];

module.exports = routeManagerMiddlewareConfigs;
