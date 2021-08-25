function webpackConfig(env, argv) {
  const isEnvLive = argv.mode === "production" || argv.mode === "staging";

  const configs = {
    entry: require("./config.entry"),
    mode: require("./config.mode"),
    output: require("./config.output"),
    module: require("./config.module"),
    resolve: require("./config.resolve"),
    optimization: require("./config.optimization"),
    plugins: require("./config.plugins"),
    devServer: require("./config.devServer"),
    devtool: require("./config.devtool"),
    externals: require("./config.externals"),
  };

  return Object.keys(configs).reduce(
    (reducer, configKey) => ({
      ...reducer,
      [configKey]: configs[configKey]({ isEnvLive }),
    }),
    {}
  );
}

module.exports = webpackConfig;

// https://webpack.js.org/configuration/
