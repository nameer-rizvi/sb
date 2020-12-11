const path = require("./path");
const server = require("./server");
const settings = require("./settings");

module.exports = { path, ...server, settings };
