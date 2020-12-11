const {
  template,
  lang,
  dir,
  applicationId,
  name,
  viewport,
  author,
  description,
  keywords,
  theme_color,
  type,
  url,
  faviconPath,
  twitterUsername,
} = require("../props");

module.exports = {
  template,
  lang,
  dir,
  applicationId,
  title: name,
  favicon: faviconPath.src,
  meta: {
    viewport,
    author,
    description,
    keywords,
    "theme-color": theme_color,
    "og:type": type,
    "og:url": url,
    "od:site_name": name,
    "og:title": name,
    "og:description": description,
    "og:image": faviconPath.destination,
    "twitter:site": twitterUsername,
  },
};

// Html-webpack-plugin:
// - https://github.com/jantimon/html-webpack-plugin
// - https://github.com/jantimon/html-webpack-plugin#Plugins
