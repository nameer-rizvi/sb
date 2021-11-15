const { settings, resource } = require("../../shared");

// Apply settings shared with the webpack instance of historyApiFallback module.

const historyApiFallbackConfig = { ...settings.historyApiFallback };

// Allow the module to only accept these html headers.

historyApiFallbackConfig.htmlAcceptHeaders = [
  "text/html",
  "application/xhtml+xml",
];

// If request is for the robots or sitemap resource, rewrite to route.

historyApiFallbackConfig.rewrites = ["robots", "sitemap"].map((rewrite) => ({
  from: rewrite,
  to: resource[rewrite],
}));

module.exports = historyApiFallbackConfig;
