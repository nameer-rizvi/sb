const { log } = require("../../shared");
const configs = require("./routeManager.configs");

function routeManagerMiddleware(req, res, next) {
  // Create the route constant by splitting the request url using the query delimiter.

  const route = req.url.split("?")[0];

  // Loop through all route configs and use the route constant & request method to find the route config.

  let routeConfig;

  for (let i = 0; i < configs.length; i++) {
    if (configs[i].route === route && configs[i].method === req.method) {
      routeConfig = configs[i];
      break;
    }
  }

  // If a matching route config exists for the request...

  if (routeConfig) {
    // Store route config in res.locals.

    res.locals.routeConfig = routeConfig;

    // Log request.

    log.route(`${req.method} ${route}`);

    // Log user agent.

    log.user(`[${req.ip}] ${req.headers["user-agent"]}`);

    // Go to next middleware

    next();
  } else next(new Error(`Missing config for: ${route} [${req.method}].`));
}

module.exports = routeManagerMiddleware;
