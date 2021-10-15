const util = {
  jwt: {
    sign: require("./jwt.sign"),
    verify: require("./jwt.verify"),
  },
  validate: require("./validate"),
};

module.exports = util;
