const helmet = require("helmet");
const config = require("./helmet.config");

// helmet applies best-practices security measures on requests.

const helmetMiddleware = helmet(config);

module.exports = helmetMiddleware;

// https://helmetjs.github.io/
// https://www.npmjs.com/package/helmet
