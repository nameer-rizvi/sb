const {
  author,
  charset,
  description,
  dir,
  elementId,
  favicon,
  keywords,
  lang,
  name,
  style,
  type,
  twitter,
  url,
  viewport,
} = require("../constants");

const path = require("path");

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
    "twitter:site": twitter.username,
    viewport,
  },
  reactElementId: elementId.react,
  splashDiv: require("./splash")({
    id: elementId.splash,
    style,
    title: name.full,
  }),
  template: path.resolve(__dirname, "template.html"),
  title: name.full,
};

// Html-webpack-plugin:
// - https://github.com/jantimon/html-webpack-plugin
// - https://github.com/jantimon/html-webpack-plugin#Plugins
