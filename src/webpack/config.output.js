const { path } = require("../shared");

module.exports = ({ isEnvProduction }) => ({
  path: path.dist(),
  // Some plugins are dependent on publicPath for generating paths.
  // If not declared, "auto" is passed.
  publicPath: "/",
  filename: isEnvProduction
    ? "lib/js/[name].[contenthash:8].js"
    : "lib/js/[name].bundle.js",
  chunkFilename: isEnvProduction
    ? "lib/js/[name].[contenthash:8].chunk.js"
    : "lib/js/[name].chunk.js",
  assetModuleFilename: isEnvProduction
    ? "lib/assets/[name].[contenthash:8][ext]"
    : "lib/assets/[name][ext]",
});

// https://webpack.js.org/configuration/output/
