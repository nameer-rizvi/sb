const shared = require("../shared");
const configCommonPlugins = require("./config.common.plugins");
const configCommonOutput = require("./config.common.output");
const configCommonModule = require("./config.common.module");
const configCommonOptimization = require("./config.common.optimization");

module.exports = (wp_isProduction) => {
  const isProduction = shared.isProduction || wp_isProduction;
  return {
    entry: {
      app: shared.path.client("/index.js"),
    },
    devtool: isProduction ? "source-map" : "inline-source-map",
    externals: {
      jsdom: "jsdom",
    },
    resolve: {
      fallback: {
        fs: false,
      },
    },
    // node: {
    //   fs: "empty",
    // },
    plugins: configCommonPlugins(isProduction),
    output: configCommonOutput(isProduction),
    module: configCommonModule(isProduction),
    optimization: configCommonOptimization,
  };
};

// Create react app's webpack config:
// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpack.config.js
