const { isEnv } = require("simpul");
const url = require("./url");
const port = require("./port");

// If testing a production build on localhost, replace url with: "http://localhost:" + port.node

const origin = isEnv.live ? url.domain : "http://localhost:" + port.client;

module.exports = origin;
