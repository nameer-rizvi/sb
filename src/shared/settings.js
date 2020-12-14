module.exports = {
  eslint: {
    reportUnusedDisableDirectives: true,
    rules: {
      "react-hooks/exhaustive-deps": 0,
      // "react/prop-types": 0,
      // "react/display-name": 0,
    },
  },
  historyApiFallback: {
    disableDotRule: true,
  },
};
