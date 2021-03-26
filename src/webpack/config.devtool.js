const webpackDevtoolConfig = ({ isEnvProduction }) =>
  isEnvProduction ? "source-map" : "inline-source-map";

module.exports = webpackDevtoolConfig;

// https://webpack.js.org/configuration/devtool/
