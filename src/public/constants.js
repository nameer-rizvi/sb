const icons = require("./icons");
const { style, elementId, origin } = require("../shared");

module.exports = {
  author: "Nameer Rizvi",
  categories: ["personalization"],
  charset: "utf-8",
  description:
    "Single-page-application boilerplate. Express server serving a React client via Webpack bundler.",
  dir: "ltr",
  display: "standalone",
  elementId,
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
  twitter: {
    username: "@username",
  },
  type: "website",
  url: origin,
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
};
