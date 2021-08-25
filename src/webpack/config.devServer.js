const { port, path, settings } = require("../shared");

const webpackDevServerConfig = ({ isEnvLive }) =>
  !isEnvLive
    ? {
        port: port.client,
        historyApiFallback: settings.historyApiFallback,
        hot: true,
        open: true,
        static: { directory: path.client() },
        devMiddleware: { stats: "minimal" },
        client: { logging: "error", overlay: true, progress: true },
      }
    : {};

module.exports = webpackDevServerConfig;

// https://webpack.js.org/configuration/dev-server/
