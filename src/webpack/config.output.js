const { path } = require("../shared");

module.exports = ({ isEnvProduction }) => ({
  path: path.dist(),
  filename: isEnvProduction
    ? "static/js/[name].[contenthash].js"
    : "static/js/[name].bundle.js",
  chunkFilename: isEnvProduction
    ? "static/js/[name].[contenthash].chunk.js"
    : "static/js/[name].chunk.js",
  assetModuleFilename: isEnvProduction
    ? "static/assets/[name].[contenthash][ext]"
    : "static/assets/[name][ext]",
});

// https://webpack.js.org/configuration/output/
