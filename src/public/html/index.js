const {
  author,
  charset,
  description,
  dir,
  elementId,
  keywords,
  lang,
  name,
  style,
  type,
  twitter,
  url,
  viewport,
} = require("../../shared");

const icons = require("../icons");

module.exports = {
  charset,
  dir,
  favicon: icons[2].src,
  lang,
  meta: {
    author,
    description,
    keywords,
    "og:description": description,
    "og:image": icons[2].destination,
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
  template: require("path").resolve(__dirname, "template.html"),
  title: name.full,
};

// Html-webpack-plugin:
// - https://github.com/jantimon/html-webpack-plugin
// - https://github.com/jantimon/html-webpack-plugin#Plugins
