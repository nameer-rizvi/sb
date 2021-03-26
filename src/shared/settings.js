const settings = {
  eslint: {
    reportUnusedDisableDirectives: true,
    rules: { "react-hooks/exhaustive-deps": 0 },
  },
  historyApiFallback: { disableDotRule: true },
};

module.exports = settings;
