const port = require("./port");

// --starterKit-flag [add application's domain, update github link]

const url = {
  appleTouchIcon: "/lib/assets/apple-touch-icon.png",
  domain: "https://www.sb.com",
  github: "https://github.com/nameer-rizvi/sb",
  localhost: {
    client: "http://localhost:" + port.client,
    server: "http://localhost:" + port.server,
  },
};

module.exports = url;
