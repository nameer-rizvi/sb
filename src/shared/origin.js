const { isEnv } = require("simpul");
const url = require("./url");

const origin = isEnv.live ? url.domain : url.localhost.client;

module.exports = origin;
