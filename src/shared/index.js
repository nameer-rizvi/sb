module.exports = {
  author: "Nameer Rizvi",
  categories: ["personalization"],
  charset: "utf-8",
  description:
    "Single-page-application boilerplate. Express server serving a React client via Webpack bundler.",
  dir: "ltr",
  display: "standalone",
  elementId: {
    react: "react-application",
    splash: "splash-container",
  },
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
  path: require("./path"),
  orientation: "portrait",
  settings: {
    eslint: {
      reportUnusedDisableDirectives: true,
      rules: { "react-hooks/exhaustive-deps": 0 },
    },
    historyApiFallback: { disableDotRule: true },
  },
  resource: {
    api: "/api/v1",
  },
  style: require("./style"),
  twitter: {
    username: "@username",
  },
  type: "website",
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
  ...require("./system"),
};
