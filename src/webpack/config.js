function webpackConfig(env, argv) {
  const isEnvLive = argv.mode === "production" || argv.mode === "staging";

  const configs = {
    devServer: require("./config.devServer"),
    devtool: require("./config.devtool"),
    entry: require("./config.entry"),
    externals: require("./config.externals"),
    mode: require("./config.mode"),
    module: require("./config.module"),
    optimization: require("./config.optimization"),
    output: require("./config.output"),
    plugins: require("./config.plugins"),
    resolve: require("./config.resolve"),
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
