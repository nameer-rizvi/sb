module.exports = ({ isEnvProduction }) =>
  isEnvProduction ? "source-map" : "inline-source-map";

// https://webpack.js.org/configuration/devtool/
