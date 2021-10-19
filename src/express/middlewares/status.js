const statusMiddleware = (req, res, next) =>
  req.method === "GET" && req.url === "/health" // If request is for application health, send "OK" status code.
    ? res.sendStatus(200)
    : process.env.MAINTENANCE_MODE === "true" // If application is in maintenance mode, send 503 status.
    ? res.sendStatus(503)
    : next(); // Go to next middleware.

module.exports = statusMiddleware;
