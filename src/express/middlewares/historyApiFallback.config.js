const { settings, resource } = require("../../shared");

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

module.exports = historyApiFallbackConfig;
