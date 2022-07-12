const shared = require("../../shared");
const historyApiFallback = require("connect-history-api-fallback");

// Apply settings shared with the webpack instance of historyApiFallback module.

const historyApiFallbackConfig = {
  ...shared.CONSTANT.SETTING.HISTORY_API_FALLBACK,
};

// Allow the module to only accept these html headers.

historyApiFallbackConfig.htmlAcceptHeaders = [
  "text/html",
  "application/xhtml+xml",
];

// If request is not for the api resource, add resource to config rewrites.

historyApiFallbackConfig.rewrites = Object.keys(shared.CONSTANT.RESOURCE)
  .filter((rewrite) => rewrite !== "API")
  .map((rewrite) => ({
    from: rewrite.toLowerCase(),
    to: shared.CONSTANT.RESOURCE[rewrite],
  }));

// historyApiFallback allows the react client use of the browser history in conjunction with request urls.

const historyApiFallbackMiddleware = historyApiFallback(
  historyApiFallbackConfig
);

module.exports = historyApiFallbackMiddleware;

// https://www.npmjs.com/package/connect-history-api-fallback
