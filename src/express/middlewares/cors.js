const cors = require("cors");
const { origin } = require("../../shared");

const corsMiddleware = cors({ origin });

module.exports = corsMiddleware;

// https://www.npmjs.com/package/cors
