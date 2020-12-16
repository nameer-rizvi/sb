const isEnvProduction = process.env.NODE_ENV === "production";
const _port = process.env.PORT || 5000;
const port = { server: _port, client: _port + 1 };

module.exports = {
  isEnvProduction,
  port,
  origin: isEnvProduction
    ? "https://github.com/nameer-rizvi/sb"
    : "http://localhost:" + port.client,
  resource: {
    api: "/api/v1",
  },
  elementId: {
    react: "react-application",
    splash: "splash-container",
  },
};
