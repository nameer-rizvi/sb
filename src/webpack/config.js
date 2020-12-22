module.exports = (env, argv) => {
  const isEnvProduction = Boolean(argv.mode === "production");

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
    (reducer, configKey) =>
      Object.assign(reducer, {
        [configKey]: configs[configKey]({ isEnvProduction }),
      }),
    {}
  );
};

// https://webpack.js.org/configuration/
