const configs = require("./routeManager.configs");
const shared = require("../../shared");

function routeManagerMiddleware(req, res, next) {
  // Loop through all route configs and use the request path & method to find the route config.

  let routeConfig;

  for (let config of configs)
    if (config.path === req.path && config.method === req.method) {
      routeConfig = config;
      break;
    }

  if (routeConfig) {
    // If a route config exists for the request...

    // Store route config in res locals.

    res.locals.routeConfig = routeConfig;

    // Log route request.

    shared.util.log.route(req.method.toLowerCase() + " " + req.path);

    // Log request ip.

    shared.util.log.user(`Request by ${req.ip}`);

    // Go to next middleware

    next();
  } else {
    // Else...

    // Log missing route config.

    const info = `Missing route config for "${req.path}" [${req.method}].`;

    shared.util.log.info("Route Manager Middleware: Error: " + info);

    // Send client a 404 ("Not Found") status.

    res.sendStatus(404);
  }
}

module.exports = routeManagerMiddleware;
