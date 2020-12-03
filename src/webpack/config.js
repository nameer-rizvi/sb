module.exports = (env, argv) => {
  const isEnvProduction =
    argv.mode === "production" || process.env.NODE_ENV === "production";

  const configs = {
    entry: require("./config.entry"),
    mode: require("./config.mode"),
    output: require("./config.output"),
    module: require("./config.module"),
    resolve: require("./config.resolve"),
    optimization: require("./config.optimization"),
    plugins: require("./config.plugins"),
    devServer: require("./config.devServer"),
    devtool: require("./config.devTool"),
  };

  return Object.keys(configs).reduce(
    (reducer, configKey) =>
      Object.assign(reducer, {
        [configKey]: configs[configKey]({ isEnvProduction }),
      }),
    {}
  );
};
