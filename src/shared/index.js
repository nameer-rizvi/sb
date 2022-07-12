const shared = {
  CONSTANT: {
    AUTHOR: require("./constant.AUTHOR"),
    CATEGORIES: require("./constant.CATEGORIES"),
    CHARSET: require("./constant.CHARSET"),
    DESCRIPTION: require("./constant.DESCRIPTION"),
    DIR: require("./constant.DIR"),
    DISPLAY: require("./constant.DISPLAY"),
    ELEMENT_ID: require("./constant.ELEMENT_ID"),
    GOOGLE: require("./constant.GOOGLE"), // --flow-googleTagManager-1
    KEYWORDS: require("./constant.KEYWORDS"),
    LANG: require("./constant.LANG"),
    NAME: require("./constant.NAME"),
    ORIENTATION: require("./constant.ORIENTATION"),
    ORIGIN: require("./constant.ORIGIN"),
    PORT: require("./constant.PORT"),
    RESOURCE: require("./constant.RESOURCE"),
    SETTING: require("./constant.SETTING"),
    SHORTCUTS: require("./constant.SHORTCUTS"),
    SOCIAL_MEDIA: require("./constant.SOCIAL_MEDIA"),
    STYLE: require("./constant.STYLE"),
    TYPE: require("./constant.TYPE"),
    URL: require("./constant.URL"),
    VIEWPORT: require("./constant.VIEWPORT"),
  },
  routes: {
    react: require("./routes.react"),
  },
  util: {
    log: require("./util.log"),
    makePath: require("./util.makePath"),
  },
};

module.exports = shared;
