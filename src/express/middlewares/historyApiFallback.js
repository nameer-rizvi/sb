const historyApiFallback = require("connect-history-api-fallback");
const historyApiFallbackConfig = require("./historyApiFallback.config");

// historyApiFallback allows the react client use of the browser history in conjunction with request urls.

const historyApiFallbackMiddleware = historyApiFallback(
  historyApiFallbackConfig
);

module.exports = historyApiFallbackMiddleware;

// https://www.npmjs.com/package/connect-history-api-fallback
