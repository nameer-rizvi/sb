// Production Protocol:
//   1. Change MAINTENANCE_MODE to "true" in ecosystem.config.js.
//   2. Run "pm2 restart ecosystem.config.js" from root folder.
//   3. ...CONDUCT MAINTENANCE...
//   4. Change MAINTENANCE_MODE to "false" in ecosystem.config.js.
//   5. Run "pm2 restart ecosystem.config.js" from root folder.

function statusMiddleware(req, res, next) {
  if (req.method === "GET" && req.url === "/health") {
    // If request is for application health...

    // Send client a 200 ("OK") status.

    res.sendStatus(200);
  } else if (process.env.MAINTENANCE_MODE === "true") {
    // Else, if application is in maintenance mode...

    // Send client a 503 ("Service Unavailable") status.

    res.sendStatus(503);
  } else if (req.method === "GET" && req.url === "/status") {
    // If request is for application status...

    // Send client a 200 ("OK") status.

    res.sendStatus(200);
  } else {
    // Else...

    // Go to next middleware.

    next();
  }
}

module.exports = statusMiddleware;
