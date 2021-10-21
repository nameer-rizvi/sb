const { log } = require("../../shared");
const configs = require("./routeManager.configs");
const { base64 } = require("simpul");

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
    // Store route config in res locals.

    res.locals.routeConfig = routeConfig;

    // Store request ip as base64 encoded string in route config.

    res.locals.routeConfig.ip = base64.encode(req.ip.replaceAll(/\D/g, ""));

    // Log request route.

    log.route(req.method.toLowerCase() + " " + route);

    // Log request user.

    log.user(`Request by ${routeConfig.ip}`);

    // Go to next middleware

    next();
  } else next(new Error(`Missing route config for: ${route} [${req.method}].`));
}

module.exports = routeManagerMiddleware;