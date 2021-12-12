const { settings, resource } = require("../../shared");
const historyApiFallback = require("connect-history-api-fallback");

// Apply settings shared with the webpack instance of historyApiFallback module.

const historyApiFallbackConfig = { ...settings.historyApiFallback };

// Allow the module to only accept these html headers.

historyApiFallbackConfig.htmlAcceptHeaders = [
  "text/html",
  "application/xhtml+xml",
];

// If request is not for the api resource, add resource to config rewrites.

historyApiFallbackConfig.rewrites = Object.keys(resource)
  .map(
    (rewrite) => rewrite !== "api" && { from: rewrite, to: resource[rewrite] }
  )
  .filter(Boolean);

// historyApiFallback allows the react client use of the browser history in conjunction with request urls.

const historyApiFallbackMiddleware = historyApiFallback(
  historyApiFallbackConfig
);

module.exports = historyApiFallbackMiddleware;

// https://www.npmjs.com/package/connect-history-api-fallback
