module.exports = ({ isEnvProduction }) =>
  isEnvProduction ? "production" : "development";

// https://webpack.js.org/configuration/mode/
