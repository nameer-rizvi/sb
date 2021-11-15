const historyApiFallback = require("connect-history-api-fallback");
const { resource, settings } = require("../../shared");

const historyApiFallbackOption = {
  htmlAcceptHeaders: ["text/html", "application/xhtml+xml"],
  rewrites: ["robots", "sitemap"].map((rewrite) => ({
    from: rewrite,
    to: resource[rewrite],
  })),
  ...settings.historyApiFallback,
};

const historyApiFallbackMiddleware = historyApiFallback(
  historyApiFallbackOption
);

module.exports = historyApiFallbackMiddleware;

// https://www.npmjs.com/package/connect-history-api-fallback
