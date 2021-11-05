require("dotenv").config();
const express = require("express");
const { port, log, resource } = require("../shared");
const { isEnv } = require("simpul");
const middlewares = require("./middlewares");

// Initialize Express server.

const server = express();

// Listen for requests on server port.

server.listen(port.server, () =>
  log.express(`server listening on port ${port.server}`)
);

// Set "trust proxy" in live environments.

server.set("trust proxy", isEnv.live);

// Use middlewares for Express application.

server.use(middlewares.application);

// If a request is made for the api resource, use the api middlewares.

server.use(resource.api, middlewares.api);

// If a request passes the api resource, return the react application.

server.use(middlewares.singlePageApplication);

// http://expressjs.com/
// https://www.npmjs.com/package/express
