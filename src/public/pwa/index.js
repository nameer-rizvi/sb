const shared = require("../../shared");

const pwa = {
  lang: shared.CONSTANT.LANG,
  dir: shared.CONSTANT.DIR,
  display: shared.CONSTANT.DISPLAY,
  orientation: shared.CONSTANT.ORIENTATION,
  theme_color: shared.CONSTANT.STYLE.COLOR,
  background_color: shared.CONSTANT.STYLE.BACKGROUND_COLOR,
  name: shared.CONSTANT.NAME.FULL,
  short_name: shared.CONSTANT.NAME.SHORT,
  description: shared.CONSTANT.DESCRIPTION,
  categories: shared.CONSTANT.CATEGORIES,
  shortcuts: shared.CONSTANT.SHORTCUTS,
  icons: require("../icons"),
};

module.exports = pwa;

/*

  MDN's manifest guide:
    https://developer.mozilla.org/en-US/docs/Web/Manifest

  * Properties not included: iarc_rating_id, prefer_related_applications,
    related_applications, scope, screenshots, shortcuts, start_url.

  * Properties not included may be useful for web applications targeting
    more mobile utilization.

  Google's manifest criteria:
    https://web.dev/customize-install/

  Webpack pwa manifest repo:
    https://github.com/arthurbergmz/webpack-pwa-manifest

  Create-react-app's manifest.json:
    https://github.com/react-cosmos/create-react-app-example/blob/master/public/manifest.json

  For W3C's category list:
    https://github.com/w3c/manifest/wiki/Categories

*/
