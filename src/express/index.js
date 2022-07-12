require("dotenv").config();
const express = require("express");
const shared = require("../shared");
const { isEnv } = require("simpul");
const middlewares = require("./middlewares");
const staticRouter = require("./static");

// Initialize Express server.

const server = express();

// Listen for requests on server port.

server.listen(shared.CONSTANT.PORT.SERVER, () => {
  // Log environment.

  shared.util.log.environment2(`in ${isEnv.name}.`, { flag: "minimal" });

  // Log listener.

  shared.util.log.express(
    `server listening on port ${shared.CONSTANT.PORT.SERVER}`,
    { flag: "minimal" }
  );
});

// Set "trust proxy" in live environments.

server.set("trust proxy", isEnv.live);

// Use middlewares for Express application.

server.use(middlewares.application);

// If a request is made for the api resource, use the api middlewares.

server.use(shared.CONSTANT.RESOURCE.API, middlewares.api);

// If a request passes the api resource, use the static router.

server.use(staticRouter);

// // http://expressjs.com/
// // https://www.npmjs.com/package/express
