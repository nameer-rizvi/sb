// starterKit-flag

const { isEnv } = require("simpul");
// const url = require("./url");
const port = require("./port");

const origin = isEnv.live
  ? "http://localhost:" + port.node // Normally this will be the domain/url.
  : "http://localhost:" + port.client;

module.exports = origin;
