const {
  name,
  display,
  orientation,
  lang,
  dir,
  style,
  description,
  categories,
} = require("../../shared");

const pwa = {
  name: name.full,
  short_name: name.short,
  display,
  orientation,
  lang,
  dir,
  background_color: style.backgroundColor,
  theme_color: style.color,
  description,
  categories,
  icons: require("../icons"),
};

module.exports = pwa;

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
