const configs = require("./routeManager.configs");
const { timelog } = require("simpul");
const { isEnv } = require("../../shared");

function routeManagerMiddleware(req, res, next) {
  // Create the route constant by splitting the request url using
  // the query delimiter and removing the api resource from it.

  const route = req.url.split("?")[0];

  // Loop through all route configs and use the route constant & request method to find the route config.

  let routeConfig;

  for (let i = 0; i < configs.length; i++) {
    if (configs[i].route === route && configs[i].method === req.method) {
      routeConfig = configs[i];
      break;
    }
  }

  // Create a readable route label for logging.

  const routeLabel = ["Route", req.method, route].join(" ");

  // If a matching route config exists for the request...

  if (routeConfig) {
    // Store route config in res.locals.

    res.locals.routeConfig = routeConfig;

    // Log request.

    timelog(`🚚 ${req.method} ${req.url}`);

    // Log user agent.

    if (isEnv.live) timelog(`👤 [${req.ip}] ${req.headers["user-agent"]}`);

    // Go to next middleware

    next();
  } else next(new Error(`${routeLabel}: missing config.`));
}

module.exports = routeManagerMiddleware;
