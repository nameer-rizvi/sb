exports.application = [
  require("./cors"),
  require("./helmet"),
  require("./historyApiFallback"),
];

exports.api = [require("./expressJSON"), require("../routes")];

exports.singlePageApplication = require("./singlePageApplication");
