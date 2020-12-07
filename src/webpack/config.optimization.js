const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = ({ isEnvProduction }) => ({
  minimize: isEnvProduction,
  minimizer: ["...", new CssMinimizerPlugin()],
  runtimeChunk: "single",
  moduleIds: isEnvProduction ? "size" : "deterministic",
  chunkIds: isEnvProduction ? "total-size" : "named",
});

// https://webpack.js.org/configuration/optimization/
// '...' can be used in optimization.minimizer to access the defaults.
