function webpackConfig(env, argv) {
  const isEnvLive = argv.mode === "production" || argv.mode === "staging";

  const config = {
    devServer: require("./config.devServer")({ isEnvLive }),
    devtool: require("./config.devtool")({ isEnvLive }),
    entry: require("./config.entry")({ isEnvLive }),
    externals: require("./config.externals")({ isEnvLive }),
    mode: require("./config.mode")({ isEnvLive }),
    module: require("./config.module")({ isEnvLive }),
    optimization: require("./config.optimization")({ isEnvLive }),
    output: require("./config.output")({ isEnvLive }),
    plugins: require("./config.plugins")({ isEnvLive }),
    resolve: require("./config.resolve")({ isEnvLive }),
  };

  return config;
}

module.exports = webpackConfig;

// https://webpack.js.org/configuration/
