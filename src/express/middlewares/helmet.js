const { isEnv } = require("simpul");
const { googleTagManagerId } = require("../../shared");
const helmet = require("helmet");

// If application is in a live environment and there's a google tag manager id,
// add google's api's to helmet's default content security policy.

const helmetMiddleware =
  isEnv.live && googleTagManagerId
    ? helmet({
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            "default-src": ["'self'", "https://www.google-analytics.com"],
            "script-src": [
              "'self'",
              "https://www.googletagmanager.com",
              "https://www.google-analytics.com",
              "'sha256-tAUxXKIiwBYXBZ8X5w5fuuH8Typ1F2qP/rwMnQfdkvs='",
            ],
          },
        },
      })
    : helmet();

module.exports = helmetMiddleware;

// https://helmetjs.github.io/
// https://www.npmjs.com/package/helmet
