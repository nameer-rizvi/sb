const shared = require("../../shared");

// Send client 301 ("Moved Permanently") result.

const routeFavicon = (req, res) =>
  res.redirect(shared.CONSTANT.ORIGIN + shared.CONSTANT.PATHNAME.FAVICON);

module.exports = routeFavicon;
