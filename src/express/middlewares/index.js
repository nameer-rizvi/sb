exports.application = [
  require("./cors"),
  require("./helmet"),
  require("./historyApiFallback"),
];

exports.api = [
  require("./status"),
  require("./expressJSON"),
  require("./routeManager"),
  // require("./rateLimit"), // Proxies (i.e. NGINX) normally handle this...
  require("./authenticate"),
  require("./validation"),
  require("../routes"),
  require("./error.index"),
];

exports.singlePageApplication = require("./singlePageApplication");
