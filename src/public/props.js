const icons = require("./icons");
const style = require("./style");
const path = require("path");

module.exports = {
  author: "Nameer Rizvi",
  applicationId: "react-application",
  categories: ["social", "personalization", "books"],
  description:
    "Single-page-application boilerplate. Express server serving a React client via Webpack bundler.",
  dir: "ltr",
  display: "standalone",
  favicon: icons[2],
  icons,
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
  lang: "en-US",
  name: {
    full: "[app name]",
    short: "[app]",
  },
  orientation: "portrait",
  style,
  template: path.resolve(__dirname, "html/template.html"),
  twitter: {
    username: "@username",
  },
  type: "website",
  url: "https://github.com/nameer-rizvi/sb",
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
};
