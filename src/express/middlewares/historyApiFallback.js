const historyApiFallback = require("connect-history-api-fallback");
const settings = require("../../shared").settings.historyApiFallback;

const historyApiFallbackMiddleware = historyApiFallback({
  htmlAcceptHeaders: ["text/html", "application/xhtml+xml"],
  ...settings,
});

module.exports = historyApiFallbackMiddleware;

// https://www.npmjs.com/package/connect-history-api-fallback
