require("dotenv").config();
const express = require("express");
const { port, log, resource } = require("../shared");
const middlewares = require("./middlewares");

const server = express();

server.listen(port.server, () =>
  log.express("server listening on port " + port.server)
);

server.use(middlewares.application);

server.use(resource.api, middlewares.api);

server.use(middlewares.singlePageApplication);

// http://expressjs.com/
// https://www.npmjs.com/package/express
