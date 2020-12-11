const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = ({ isEnvProduction }) => ({
  minimize: isEnvProduction,
  minimizer: ["...", new CssMinimizerPlugin()],
  moduleIds: isEnvProduction ? "size" : "deterministic",
  chunkIds: isEnvProduction ? "total-size" : "named",
  runtimeChunk: "single",
});

// https://webpack.js.org/configuration/optimization/
// '...' can be used in optimization.minimizer to access the defaults.
