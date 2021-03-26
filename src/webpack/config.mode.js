const webpackModeConfig = ({ isEnvProduction }) =>
  isEnvProduction ? "production" : "development";

module.exports = webpackModeConfig;

// https://webpack.js.org/configuration/mode/
