// --starterKit-flag [change application's domain, github]

const SHARED_CONSTANT_PORT = require("./constant.PORT");

const SHARED_CONSTANT_URL = {
  APPLE_TOUCH_ICON: "/lib/assets/apple-touch-icon.png",
  DOMAIN: "https://www.sb.com",
  GITHUB: "https://github.com/nameer-rizvi/sb",
  LOCALHOST_CLIENT: "http://localhost:" + SHARED_CONSTANT_PORT.CLIENT,
  LOCALHOST_SERVER: "http://localhost:" + SHARED_CONSTANT_PORT.SERVER,
};

module.exports = SHARED_CONSTANT_URL;

// https://developer.mozilla.org/en-US/docs/Web/API/URL
