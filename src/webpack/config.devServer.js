const { port, path, settings } = require("../shared");

module.exports = ({ isEnvProduction }) =>
  !isEnvProduction
    ? {
        port: port.client,
        contentBase: path.client(),
        historyApiFallback: settings.historyApiFallback,
        hot: true,
        compress: true,
        open: true,
        stats: "minimal",
        clientLogLevel: "error",
      }
    : {};

// https://webpack.js.org/configuration/dev-server/
