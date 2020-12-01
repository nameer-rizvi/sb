const { path } = require("../shared");

module.exports = (isProduction) => ({
  path: path.dist(),
  publicPath: "/",
  filename: isProduction ? "[name].[contenthash].js" : "[name].bundle.js",
});
