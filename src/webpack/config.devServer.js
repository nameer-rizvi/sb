const { port, path, settings } = require("../shared");

const webpackDevServerConfig = ({ isEnvLive }) =>
  !isEnvLive
    ? {
        port: port.client,
        contentBase: path.client(),
        historyApiFallback: settings.historyApiFallback,
        compress: true,
        hot: true,
        open: true,
        stats: "minimal",
        clientLogLevel: "error",
      }
    : {};

module.exports = webpackDevServerConfig;

// https://webpack.js.org/configuration/dev-server/
