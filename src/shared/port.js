const _port = process.env.PORT || 5000;

module.exports = {
  server: _port,
  client: _port + 1,
};
