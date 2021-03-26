const isEnvProduction = require("./isEnvProduction");
const port = require("./port");

const origin = isEnvProduction ? "" : "http://localhost:" + port.client;

module.exports = origin;
