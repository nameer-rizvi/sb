const port = require("./port");

// --starterKit-flag [add application's domain/url, change github link]

const url = {
  domain: "",
  github: "https://github.com/nameer-rizvi/sb",
  localhost: {
    client: "http://localhost:" + port.client,
    server: "http://localhost:" + port.server,
  },
};

module.exports = url;
