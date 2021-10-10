const { isEnv } = require("simpul");
const url = require("./url");
const port = require("./port");

const origin = isEnv.live ? url : "http://localhost:" + port.client;

module.exports = origin;
