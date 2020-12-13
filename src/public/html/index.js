const {
  applicationId,
  author,
  description,
  dir,
  favicon,
  HTMLTemplate,
  keywords,
  lang,
  name,
  style,
  type,
  twitter,
  url,
  viewport,
} = require("../props");

module.exports = {
  applicationId,
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
  template: HTMLTemplate,
  title: name.full,
};

// Html-webpack-plugin:
// - https://github.com/jantimon/html-webpack-plugin
// - https://github.com/jantimon/html-webpack-plugin#Plugins
