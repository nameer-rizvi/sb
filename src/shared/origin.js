const isEnv = require("./isEnv");
const port = require("./port");

const origin = isEnv.live ? "" : "http://localhost:" + port.client;

module.exports = origin;
