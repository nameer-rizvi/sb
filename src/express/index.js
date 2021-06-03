require("dotenv").config();
const express = require("express");
const { port, resource } = require("../shared");
const { timelog } = require("simpul");
const middlewares = require("./middlewares");

const server = express();

server.listen(port.server, () =>
  timelog("⚡ Express server listening on port " + port.server + ".")
);

server.use(middlewares.application);

server.use(resource.api, middlewares.api);

server.use(middlewares.singlePageApplication);

// http://expressjs.com/
// https://www.npmjs.com/package/express
