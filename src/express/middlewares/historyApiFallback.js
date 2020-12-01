const historyApiFallback = require("connect-history-api-fallback");
const settings = require("../../shared").settings.historyApiFallback;

module.exports = historyApiFallback({
  htmlAcceptHeaders: ["text/html", "application/xhtml+xml"],
  ...settings,
});

// https://www.npmjs.com/package/connect-history-api-fallback
