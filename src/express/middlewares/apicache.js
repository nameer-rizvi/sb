const apicache = require("apicache");

// Route manager config.

// Max cache time limit: "2,147,483,647 milliseconds" || "35,791 minutes" || "596 hours" || "24 days" || "3.5 weeks"

const CACHE = {
  MIN: apicache.middleware("30 seconds"),
  STALE: apicache.middleware("5 minutes"),
  HOUR: apicache.middleware("1 hour"),
  MAX: apicache.middleware("3 weeks"),
};

// Middleware.

function apicacheMiddleware(req, res, next) {
  if (res.locals.routeConfig.cache) {
    // If route has a apicache middleware method available, call it.

    res.locals.routeConfig.cache(req, res, next);
  } else {
    // Else, go to next middleware.

    next();
  }
}

module.exports = { CACHE, middleware: apicacheMiddleware };

// https://www.npmjs.com/package/apicache
