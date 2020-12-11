const path = require("path");
const icons = require("./favicon");
const { color, backgroundColor, fontFamily } = require("./style");

module.exports = {
  template: path.resolve(__dirname, "html/template.html"),
  lang: "en",
  dir: "ltr",
  applicationId: "react-application",
  type: "website",
  url: "https://github.com/nameer-rizvi/sb",
  start_url: ".",
  name: "[app name]",
  short_name: "[app]",
  author: "Nameer Rizvi",
  // twitterUsername: "@username",
  description:
    "Single-page-application boilerplate. Express server serving a React client via Webpack bundler.",
  keywords: [
    "javascript",
    "node",
    "nodejs",
    "express",
    "expressjs",
    "react",
    "reactjs",
    "webpack",
    "webpack-middleware",
    "boilerplate",
    "boilerplate-template",
    "boilerplate-application",
    "single-page-application",
    "spa",
  ].join(", "),
  theme_color: color,
  background_color: backgroundColor,
  fontFamily: fontFamily,
  style: [
    "color: " + color,
    "background-color: " + backgroundColor,
    "font-family: " + fontFamily,
  ].join("; "),
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
  display: "standalone",
  orientation: "omit",
  faviconPath: icons[2],
  icons,
};
