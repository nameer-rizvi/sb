const shared = require("../../shared");
const icons = require("../icons");
const makeSplashScreen = require("./splash");

const publicHtml = {
  lang: shared.CONSTANT.LANG,
  dir: shared.CONSTANT.DIR,
  charset: shared.CONSTANT.CHARSET,
  title: shared.CONSTANT.NAME.FULL,
  favicon: icons[icons.length - 1].src,
  meta: {
    viewport: shared.CONSTANT.VIEWPORT,
    "theme-color": shared.CONSTANT.STYLE.COLOR,
    author: shared.CONSTANT.AUTHOR,
    description: shared.CONSTANT.DESCRIPTION,
    keywords: shared.CONSTANT.KEYWORDS,
    "og:type": shared.CONSTANT.TYPE,
    "og:site_name": shared.CONSTANT.NAME.FULL,
    "og:title": shared.CONSTANT.NAME.FULL,
    "og:description": shared.CONSTANT.DESCRIPTION,
    "og:image":
      shared.CONSTANT.URL.DOMAIN + shared.CONSTANT.URL.APPLE_TOUCH_ICON,
    "og:url": shared.CONSTANT.URL.DOMAIN,
    "twitter:card": shared.CONSTANT.SOCIAL_MEDIA.TWITTER.CARD,
    "twitter:title": shared.CONSTANT.NAME.FULL,
    "twitter:site": shared.CONSTANT.SOCIAL_MEDIA.TWITTER.HANDLE,
    "twitter:creator": shared.CONSTANT.SOCIAL_MEDIA.TWITTER.HANDLE,
  },
  template: require("path").resolve(__dirname, "template.html"),
  splashScreen: makeSplashScreen({
    id: shared.CONSTANT.ELEMENT_ID.SPLASH,
    title: shared.CONSTANT.NAME.FULL,
    style: shared.CONSTANT.STYLE,
  }),
  reactElementId: shared.CONSTANT.ELEMENT_ID.REACT,
};

module.exports = publicHtml;

// Html-webpack-plugin:
//   https://github.com/jantimon/html-webpack-plugin
//   https://github.com/jantimon/html-webpack-plugin#Plugins
