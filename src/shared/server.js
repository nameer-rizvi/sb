const isEnvProduction = process.env.NODE_ENV === "production";

const _port = process.env.PORT || 5000;

const port = { server: _port, client: _port + 1 };

const { url } = require("../public").props;

module.exports = {
  isEnvProduction,
  port,
  origin: isEnvProduction ? url : "http://localhost:" + port.client,
  endpoint: "/api",
};
