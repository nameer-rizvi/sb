const CSSMinimizerPlugin = require("css-minimizer-webpack-plugin");

const webpackOptimizationConfig = ({ isEnvProduction }) => ({
  minimize: isEnvProduction,
  minimizer: ["...", new CSSMinimizerPlugin()],
  moduleIds: isEnvProduction ? "size" : "deterministic",
  chunkIds: isEnvProduction ? "total-size" : "named",
  runtimeChunk: "single",
});

module.exports = webpackOptimizationConfig;

// https://webpack.js.org/configuration/optimization/
// '...' can be used in optimization.minimizer to access the defaults.
// https://www.npmjs.com/package/css-minimizer-webpack-plugin
