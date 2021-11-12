const historyApiFallback = require("connect-history-api-fallback");
const historyApiFallbackSettings = require("../../shared").settings
  .historyApiFallback;

const historyApiFallbackOption = {
  htmlAcceptHeaders: ["text/html", "text/xml", "application/xhtml+xml"],
  ...historyApiFallbackSettings,
};

const historyApiFallbackMiddleware = historyApiFallback(
  historyApiFallbackOption
);

module.exports = historyApiFallbackMiddleware;

// https://www.npmjs.com/package/connect-history-api-fallback
