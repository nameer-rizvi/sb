const shared = require("../../shared");

/*
  
  Protocol for conducting maintenance in a live pm2 environment:

  1. Set 'MAINTENANCE_MODE=true' in ecosystem.config.js.
  2. Run "npm run pm2-restart" || "pm2 restart ecosystem.config.js" from root folder.
  3. [CONDUCT MAINTENANCE]
  4. Set 'MAINTENANCE_MODE=' in ecosystem.config.js.
  5. 2. Run "npm run pm2-restart" || "pm2 restart ecosystem.config.js" from root folder.

*/

function statusMiddleware(req, res, next) {
  if (req.method === "GET" && req.url === "/health") {
    // If request is for application health...

    // Log request.

    shared.util.log.info("OK health.");

    // Send client a 200 ("OK") status.

    res.sendStatus(200);
  } else if (process.env.MAINTENANCE_MODE === "true") {
    // Else, if application is in maintenance mode...

    // Send client a 503 ("Service Unavailable") status.

    res.sendStatus(503);
  } else if (req.method === "GET" && req.url === "/status") {
    // Else, if request is for application status...

    // Log request.

    shared.util.log.info("OK status.");

    // Send client a 200 ("OK") status.

    res.sendStatus(200);
  } else {
    // Else, go to next middleware.

    next();
  }
}

module.exports = statusMiddleware;
