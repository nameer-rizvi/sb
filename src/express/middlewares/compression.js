const compression = require("compression");

// Compress response bodies for all requests.

const compressionMiddleware = compression();

module.exports = compressionMiddleware;

// https://www.npmjs.com/package/compression
