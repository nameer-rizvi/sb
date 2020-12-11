const {
  categories,
  description,
  dir,
  display,
  icons,
  lang,
  name,
  orientation,
  style,
} = require("./props");

module.exports = {
  background_color: style.backgroundColor,
  categories,
  description,
  dir,
  display,
  icons,
  lang,
  name: name.full,
  orientation,
  short_name: name.short,
  theme_color: style.color,
};

// MDN's manifest guide:
// https://developer.mozilla.org/en-US/docs/Web/Manifest
//
// * Properties not included: iarc_rating_id, prefer_related_applications,
//   related_applications, scope, screenshots, shortcuts, start_url.
//
// * Properties not included may be useful for web applications targeting
//   more mobile utilization.
//
//
// Google's manifest criteria:
// https://developers.google.com/web/fundamentals/app-install-banners
//
// Webpack pwa manifest repo:
// https://github.com/arthurbergmz/webpack-pwa-manifest
//
// Create-react-app's manifest.json:
// https://github.com/react-cosmos/create-react-app-example/blob/master/public/manifest.json
//
// For W3C's category list:
// https://github.com/w3c/manifest/wiki/Categories
