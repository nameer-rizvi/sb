const shared = require("../shared");

const webpackEntryConfig = () => shared.util.makePath.client("index.js");

module.exports = webpackEntryConfig;

// https://webpack.js.org/configuration/entry-context/
