const { port, path, settings } = require("../shared");

module.exports = ({ isEnvProduction }) =>
  !isEnvProduction
    ? {
        port: port.client,
        contentBase: path.dist(),
        historyApiFallback: settings.historyApiFallback,
        hot: true,
        compress: true,
        stats: "minimal",
        clientLogLevel: "error",
        // open: true,
      }
    : {};

// https://webpack.js.org/configuration/dev-server/
