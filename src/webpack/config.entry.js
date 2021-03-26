const { path } = require("../shared");

const webpackEntryConfig = () => path.client("index.js");

module.exports = webpackEntryConfig;

// https://webpack.js.org/configuration/entry-context/
