const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = ({ isEnvProduction }) => ({
  minimize: isEnvProduction,
  minimizer: [new CssMinimizerPlugin(), "..."],
  moduleIds: isEnvProduction ? "size" : "deterministic",
  chunkIds: isEnvProduction ? "total-size" : "named",
  runtimeChunk: "single",
  // splitChunks: {
  //   cacheGroups: {
  //     vendor: {
  //       test: /[\\/]node_modules[\\/]/,
  //       name: "vendors",
  //       chunks: "all",
  //     },
  //   },
  },
});

// https://webpack.js.org/configuration/optimization/
// '...' can be used in optimization.minimizer to access the defaults.
