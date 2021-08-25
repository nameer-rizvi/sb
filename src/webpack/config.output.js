const { path } = require("../shared");

const webpackOutputConfig = ({ isEnvLive }) => ({
  path: path.dist(),
  // Some plugins are dependent on publicPath for generating paths.
  // If not declared, "auto" is passed.
  publicPath: "/",
  filename: isEnvLive
    ? "lib/js/[name].[contenthash:8].js"
    : "lib/js/[name].bundle.js",
  chunkFilename: isEnvLive
    ? "lib/js/[name].[contenthash:8].chunk.js"
    : "lib/js/[name].chunk.js",
  assetModuleFilename: isEnvLive
    ? "lib/assets/[name].[contenthash:8][ext]"
    : "lib/assets/[name][ext]",
});

module.exports = webpackOutputConfig;

// https://webpack.js.org/configuration/output/
