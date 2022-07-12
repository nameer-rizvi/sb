const shared = require("../../shared");

// Send client 301 ("Moved Permanently") result.

const routeFavicon = (req, res) =>
  res.redirect(shared.CONSTANT.URL.LOCALHOST_CLIENT + "/favicon.ico");

module.exports = routeFavicon;
