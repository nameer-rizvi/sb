const shared = require("../../shared");

// Set recommended limit for request duration to 500 ms.

const DURATION_LIMIT = 500;

function performanceMiddleware(req, res, next) {
  // Constant for request start time.

  const start = new Date().getTime();

  // On response finish...

  res.on("finish", () => {
    // Constant for request end time.

    const end = new Date().getTime();

    // Constant for request duration.

    const duration = end - start;

    // Constant for request duration string in ms.

    const ms = `${duration.toLocaleString()} ms`;

    // Log request peformance.

    shared.util.log.performance(ms);

    // If request performance was above the recommended limit, log warning.

    if (duration > DURATION_LIMIT) {
      const path = req.originalUrl.split("?")[0];
      const warning = [
        `Request duration (${ms}) for "${path}" [${req.method}] by ${req.ip}`,
        `was longer than recommended limit (${DURATION_LIMIT.toLocaleString()} ms).`,
        "Consider refactoring to enhance route logic and reduce request time.",
      ].join(" ");
      shared.util.log.warning(warning);
    }
  });

  // Go to next middleware.

  next();
}

module.exports = performanceMiddleware;
