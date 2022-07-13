const CSSMinimizerPlugin = require("css-minimizer-webpack-plugin");

const webpackOptimizationConfig = ({ isEnvLive }) => ({
  minimize: isEnvLive,
  minimizer: ["...", new CSSMinimizerPlugin()],
  moduleIds: isEnvLive ? "size" : "deterministic",
  chunkIds: isEnvLive ? "total-size" : "named",
  runtimeChunk: "single",
});

module.exports = webpackOptimizationConfig;

// https://webpack.js.org/configuration/optimization/
//  '...' can be used in optimization.minimizer to access the defaults.
// https://www.npmjs.com/package/css-minimizer-webpack-plugin
