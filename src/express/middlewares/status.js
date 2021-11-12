function statusMiddleware(req, res, next) {
  if (req.method === "GET" && req.url === "/health") {
    // If request is for application health...

    // Send client a 200 ("OK") status.

    res.sendStatus(200);
  } else if (process.env.MAINTENANCE_MODE === "true") {
    // Else, if application is in maintenance mode...

    // Send client a 503 ("Service Unavailable") status.

    res.sendStatus(503);
  } else {
    // Else...

    // Go to next middleware.

    next();
  }
}

module.exports = statusMiddleware;
