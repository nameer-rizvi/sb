require("dotenv").config();
const express = require("express");
const { port, log, resource } = require("../shared");
const { isEnv } = require("simpul");
const middlewares = require("./middlewares");
const staticRouter = require("./static");

// Initialize Express server.

const server = express();

// Listen for requests on server port.

server.listen(port.server, () => {
  // Log listener.

  log.express(`server listening on port ${port.server}`, { flag: "minimal" });

  // Log environment.

  log.environment(`in ${process.env.NODE_ENV}.`, { flag: "minimal" });
});

// Set "trust proxy" in live environments for secure sessions.

server.set("trust proxy", isEnv.live);

// Use middlewares for Express application.

server.use(middlewares.application);

// If a request is made for the api resource, use the api middlewares.

server.use(resource.api, middlewares.api);

// If a request passes the api resource, use static router.

server.use(staticRouter);

// http://expressjs.com/
// https://www.npmjs.com/package/express
