const { ProvidePlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const HTMLWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const WebpackPWAManifest = require("webpack-pwa-manifest");
const WorkboxPlugin = require("workbox-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const { html: HTML, pwa: PWA } = require("../public");
const { googleTagManagerId, path, settings } = require("../shared");

const webpackPluginsConfig = ({ isEnvLive }) =>
  [
    new ProvidePlugin({ process: "process/browser" }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: isEnvLive }),
    new HTMLWebpackPlugin({ minify: isEnvLive, ...HTML }),
    ...(isEnvLive
      ? [
          googleTagManagerId &&
            new HTMLWebpackPartialsPlugin({
              path: path.public("html/gtag.html"),
              location: "head",
              options: { googleTagManagerId },
            }),
          new MiniCSSExtractPlugin({
            filename: "lib/css/[name].[contenthash:8].css",
            chunkFilename: "lib/css/[name].[contenthash:8].chunk.css",
          }),
          new WebpackManifestPlugin({ fileName: "asset-manifest.json" }),
          new WebpackPWAManifest({ filename: "manifest.json", ...PWA }),
          new WorkboxPlugin.InjectManifest({
            swSrc: path.public("/service-worker/index.js"),
            swDest: path.dist("service-worker.js"),
            exclude: [/\.(?:png|jpg|jpeg|svg)$/],
          }),
        ]
      : [
          new MiniCSSExtractPlugin(),
          new ESLintPlugin({
            eslintPath: require.resolve("eslint"),
            extensions: ["js", "mjs", "jsx", "ts", "tsx"],
            context: path.client(),
            baseConfig: {
              extends: [require.resolve("eslint-config-react-app/base")],
              ...settings.eslint,
            },
          }),
        ]),
  ].filter(Boolean);

module.exports = webpackPluginsConfig;

// https://webpack.js.org/configuration/plugins/
//
// If using moment.js, add to plugins:
//   new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
//
// https://www.npmjs.com/package/clean-webpack-plugin
// https://www.npmjs.com/package/html-webpack-plugin
// https://www.npmjs.com/package/mini-css-extract-plugin
// https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
// https://developers.google.com/web/tools/workbox/guides/get-started
// https://www.npmjs.com/package/webpack-manifest-plugin
// https://www.npmjs.com/package/webpack-pwa-manifest
// https://www.npmjs.com/package/eslint-webpack-plugin
//
// Out-of-the-box service worker solution:
//   new WorkboxPlugin.GenerateSW({
//     clientsClaim: true,
//     skipWaiting: true,
//     exclude: [/\.(?:png|jpg|jpeg|svg)$/],
//   }),
//
// On why "csp-html-webpack-plugin" may not be worth including:
//   https://github.com/slackhq/csp-html-webpack-plugin/issues/82
