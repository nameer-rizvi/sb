const {
  lang,
  dir,
  charset,
  name,
  viewport,
  author,
  description,
  keywords,
  type,
  url,
  style,
  socialMedia,
  elementId,
} = require("../../shared");
const favicon = require("../icons")[2];
const makeSplashScreen = require("./splash");

const html = {
  lang,
  dir,
  charset,
  title: name.full,
  favicon: favicon.src,
  meta: {
    author,
    description,
    keywords,
    "theme-color": style.color,
    "og:type": type,
    "og:url": url,
    "od:site_name": name.full,
    "og:title": name.full,
    "og:description": description,
    "og:image": favicon.destination,
    "twitter:site": socialMedia.twitter.username,
    viewport,
  },
  template: require("path").resolve(__dirname, "template.html"),
  splashDiv: makeSplashScreen({
    id: elementId.splash,
    style,
    title: name.full,
  }),
  reactElementId: elementId.react,
};

module.exports = html;

// Html-webpack-plugin:
// - https://github.com/jantimon/html-webpack-plugin
// - https://github.com/jantimon/html-webpack-plugin#Plugins
