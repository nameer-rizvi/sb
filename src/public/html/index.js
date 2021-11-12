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
    "og:site_name": name.full,
    "og:title": name.full,
    "og:description": description,
    "og:image": origin + "/lib/assets/apple-touch-icon.png",
    "og:url": origin,
    "twitter:card": socialMedia.twitter.card,
    "twitter:title": name.full,
    "twitter:site": socialMedia.twitter.handle,
    "twitter:creator": socialMedia.twitter.handle,
    robots: "index, follow",
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
