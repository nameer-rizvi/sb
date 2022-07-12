const PORT = process.env.PORT || 5000;

const SHARED_CONSTANT_PORT = {
  SERVER: PORT,
  CLIENT: PORT + 1,
};

module.exports = SHARED_CONSTANT_PORT;

// https://developer.mozilla.org/en-US/docs/Glossary/Port
