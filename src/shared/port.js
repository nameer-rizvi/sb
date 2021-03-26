const nodePort = process.env.PORT || 5000;

const port = {
  server: nodePort,
  client: nodePort + 1,
};

module.exports = port;
