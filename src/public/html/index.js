const {
  author,
  charset,
  description,
  dir,
  elementId,
  keywords,
  lang,
  name,
  socialMedia,
  style,
  type,
  url,
  viewport,
} = require("../../shared");

const favicon = require("../icons")[2];

module.exports = {
  charset,
  dir,
  favicon: favicon.src,
  lang,
  meta: {
    author,
    description,
    keywords,
    "og:description": description,
    "og:image": favicon.destination,
    "od:site_name": name.full,
    "og:title": name.full,
    "og:type": type,
    "og:url": url,
    "theme-color": style.color,
    "twitter:site": socialMedia.twitter.username,
    viewport,
  },
  reactElementId: elementId.react,
  splashDiv: require("./splash")({
    id: elementId.splash,
    style,
    title: name.full,
  }),
  template: require("path").resolve(__dirname, "template.html"),
  title: name.full,
};

// Html-webpack-plugin:
// - https://github.com/jantimon/html-webpack-plugin
// - https://github.com/jantimon/html-webpack-plugin#Plugins
