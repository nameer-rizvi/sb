const webpackModeConfig = ({ isEnvLive }) =>
  isEnvLive ? "production" : "development";

module.exports = webpackModeConfig;

// https://webpack.js.org/configuration/mode/
