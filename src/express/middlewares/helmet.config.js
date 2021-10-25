const { isEnv } = require("simpul");
const { googleTagManagerId } = require("../../shared");

// If application is in a live environment and a Google Tag Manager Id exists...
// return appropriate Content Security Policy for helmet middleware to use.

let contentSecurtyPolicy, helmetMiddlewareConfig;

if (isEnv.live && googleTagManagerId) {
  contentSecurtyPolicy = {};

  contentSecurtyPolicy["default-src"] = [
    "'self'",
    "https://www.google-analytics.com",
  ];

  contentSecurtyPolicy["script-src"] = [
    "'self'",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "'sha256-tAUxXKIiwBYXBZ8X5w5fuuH8Typ1F2qP/rwMnQfdkvs='",
  ];

  contentSecurtyPolicy["img-src"] = [
    "'self'",
    "data:",
    "https://www.google-analytics.com",
    "https://www.googletagmanager.com",
  ];

  helmetMiddlewareConfig = {
    contentSecurityPolicy: {
      useDefaults: true,
      directives: contentSecurtyPolicy,
    },
  };
}

module.exports = helmetMiddlewareConfig;
