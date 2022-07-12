exports.application = [
  require("./performance"),
  require("./status"),
  require("./cors"),
  require("./helmet"),
  require("./historyApiFallback"),
];

exports.api = [
  require("./expressParsers"),
  require("./routeManager"),
  // require("./rateLimit"), // Proxies (i.e. NGINX) normally handle this...
  require("./authenticate"),
  require("./validation"),
  require("./compression"),
  require("./apicache").middleware,
  require("../routes"),
  require("./error.index"),
];
