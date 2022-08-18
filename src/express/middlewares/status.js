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
  // Response configs for handling status requests. Order is important.

  const responses = [
    {
      condition: req.method === "GET" && req.url === "/health",
      log: "OK health",
      status: 200,
    },
    {
      condition: process.env.MAINTENANCE_MODE === "true",
      log: "In maintenance mode",
      status: 503,
    },
    {
      condition: req.method === "GET" && req.url === "/status",
      log: "OK status",
      status: 200,
    },
  ];

  // Set response to first response config with a truthy condition.

  const response = responses.find((r) => r.condition);

  // If a response was found...

  if (response) {
    // Log info using the info emoji.

    shared.util.log.info(response.log);

    // Send client the response status.

    res.sendStatus(response.status);
  } else next();
}

module.exports = statusMiddleware;
