const { isEnv } = require("simpul");
const { google } = require("../../shared");
const helmet = require("helmet");

// --flow-googleTagManager-4
//
// If application is in a live environment and a Google Tag Manager Id exists...
//   Return appropriate Content Security Policy for helmet middleware to use.

let contentSecurtyPolicy, helmetConfig;

if (isEnv.live && google.tagManagerId) {
  contentSecurtyPolicy = {};

  contentSecurtyPolicy["default-src"] = [
    "'self'",
    "https://www.google-analytics.com",
  ];

  contentSecurtyPolicy["script-src"] = [
    "'self'",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "'sha256-...'", // This will be unique to your application, copy-paste suggested value from console error.
  ];

  contentSecurtyPolicy["img-src"] = [
    "'self'",
    "data:",
    "https://www.google-analytics.com",
    "https://www.googletagmanager.com",
  ];

  helmetConfig = {
    contentSecurityPolicy: {
      useDefaults: true,
      directives: contentSecurtyPolicy,
    },
  };
}

// helmet applies best-practices security measures on requests.

const helmetMiddleware = helmet(helmetConfig);

module.exports = helmetMiddleware;

// https://helmetjs.github.io/
// https://www.npmjs.com/package/helmet
