const helmet = require("helmet");
const helmetConfig = require("./helmet.config");

// helmet applies best-practices security measures on requests.

const helmetMiddleware = helmet(helmetConfig);

module.exports = helmetMiddleware;

// https://helmetjs.github.io/
// https://www.npmjs.com/package/helmet
