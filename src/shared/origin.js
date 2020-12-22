const isEnvProduction = require("./isEnvProduction");
const { client: clientPort } = require("./port");

module.exports = isEnvProduction ? "" : "http://localhost:" + clientPort;
