const { isEnv } = require("simpul");
const SHARED_CONSTANT_URL = require("./constant.URL");

const SHARED_CONSTANT_ORIGIN = isEnv.production
  ? SHARED_CONSTANT_URL.DOMAIN
  : SHARED_CONSTANT_URL.LOCALHOST.CLIENT;

module.exports = SHARED_CONSTANT_ORIGIN;

// https://developer.mozilla.org/en-US/docs/Glossary/Origin
