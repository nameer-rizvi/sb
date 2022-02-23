const compression = require("compression");

const compressionMiddleware = compression();

module.exports = compressionMiddleware;
