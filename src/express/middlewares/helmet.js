const { isEnv } = require("simpul");
const shared = require("../../shared");
const helmet = require("helmet");

// --flow-googleTagManager-4

// If application is in a live environment and a Google Tag Manager Id exists...
//   Return appropriate Content Security Policy for helmet middleware to use.

let contentSecurityPolicy, helmetConfig;

if (!isEnv.live && shared.CONSTANT.GOOGLE.TAG_MANAGER.ID) {
  contentSecurityPolicy = {};

  contentSecurityPolicy["default-src"] = [
    "'self'",
    shared.CONSTANT.GOOGLE.ANALYTICS.URL,
  ];

  contentSecurityPolicy["script-src"] = [
    "'self'",
    shared.CONSTANT.GOOGLE.TAG_MANAGER.URL,
    shared.CONSTANT.GOOGLE.ANALYTICS.URL,
    shared.CONSTANT.GOOGLE.TAG_MANAGER.SHA256,
  ];

  contentSecurityPolicy["img-src"] = [
    "'self'",
    "data:",
    shared.CONSTANT.GOOGLE.ANALYTICS.URL,
    shared.CONSTANT.GOOGLE.TAG_MANAGER.URL,
  ];

  helmetConfig = {
    contentSecurityPolicy: {
      useDefaults: true,
      directives: contentSecurityPolicy,
    },
  };
}

// helmet applies best-practices security measures on requests.

const helmetMiddleware = helmet(helmetConfig);

module.exports = helmetMiddleware;

// https://helmetjs.github.io/
// https://www.npmjs.com/package/helmet
