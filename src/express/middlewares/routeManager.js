const configs = require("./routeManager.configs");
const { base64, isEnv } = require("simpul");
const { log } = require("../../shared");

function routeManagerMiddleware(req, res, next) {
  // Create the route constant by splitting the request url using the query delimiter.

  const route = req.url.split("?")[0];

  // Loop through all route configs and use the route constant & request method to find the route config.

  let routeConfig;

  for (let config of configs) {
    if (config.route === route && config.method === req.method) {
      routeConfig = config;
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
  } else if (!isEnv.live) {
    // Else if environment is not live...

    // Send error to next middleware.

    next(new Error(`Missing route config for: ${route} [${req.method}].`));
  } else {
    // Else...

    // Send client a 404 status code.

    res.sendStatus(404);
  }
}

module.exports = routeManagerMiddleware;
