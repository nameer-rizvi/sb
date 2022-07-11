const shared = require("../shared");

const webpackDevServerConfig = ({ isEnvLive }) =>
  !isEnvLive
    ? {
        port: shared.CONSTANT.PORT.CLIENT,
        historyApiFallback: shared.CONSTANT.SETTING.HISTORY_API_FALLBACK,
        // open: true,
        hot: true,
        static: {
          directory: shared.util.makePath.client(),
        },
        devMiddleware: {
          stats: "minimal",
        },
        client: {
          logging: "error",
          overlay: true,
          progress: true,
        },
      }
    : {};

module.exports = webpackDevServerConfig;

// https://webpack.js.org/configuration/dev-server/
