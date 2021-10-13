const {
  lang,
  dir,
  charset,
  name,
  viewport,
  style,
  author,
  description,
  keywords,
  type,
  origin,
  url,
  socialMedia,
  elementId,
} = require("../../shared");
const icons = require("../icons");
const makeSplashScreen = require("./splash");

const html = {
  lang,
  dir,
  charset,
  title: name.full,
  favicon: icons[icons.length - 1].src,
  meta: {
    viewport,
    "theme-color": style.color,
    author,
    description,
    keywords,
    "og:type": type,
    "od:site_name": name.full,
    "og:title": name.full,
    "og:description": description,
    "og:image": origin + "/favicon.ico",
    "og:url": url,
    "twitter:card": "summary",
    "twitter:title": name.full,
    "twitter:site": socialMedia.twitter.username,
    "twitter:creator": socialMedia.twitter.username,
  },
  template: require("path").resolve(__dirname, "template.html"),
  splashDiv: makeSplashScreen({
    id: elementId.splash,
    title: name.full,
    style,
  }),
  reactElementId: elementId.react,
};

module.exports = html;

// Html-webpack-plugin:
// - https://github.com/jantimon/html-webpack-plugin
// - https://github.com/jantimon/html-webpack-plugin#Plugins
