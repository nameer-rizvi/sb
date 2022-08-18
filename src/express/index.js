require("dotenv").config();
const express = require("express");
const shared = require("../shared");
const { isEnv } = require("simpul");
const middlewares = require("./middlewares");
const staticRouter = require("./static");

// Initialize Express server.

const server = express();

// Initialize port to use for the server.

const port = shared.CONSTANT.PORT.SERVER;

// Listen for requests on server port.

server.listen(port, () => {
  // Log environment.

  shared.util.log.environment2(`in ${isEnv.name}.`);

  // Log listener.

  shared.util.log.express(`server listening on port ${port}`);
});

// Set "trust proxy" in live environments.

server.set("trust proxy", isEnv.live);

// Use middlewares for Express application.

server.use(middlewares.application);

// If a request is made for the api pathname, use the api middlewares.

server.use(shared.CONSTANT.PATHNAME.API, middlewares.api);

// If a request passes the api pathname, use the static router.

server.use(staticRouter);

// // http://expressjs.com/
// // https://www.npmjs.com/package/express
