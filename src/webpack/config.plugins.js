const { ProvidePlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { html: HTML, pwa: PWA } = require("../public");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const WorkboxPlugin = require("workbox-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const { path, settings } = require("../shared");

const webpackPluginsConfig = ({ isEnvLive }) => [
  new ProvidePlugin({ process: "process/browser" }),
  new CleanWebpackPlugin({ cleanStaleWebpackAssets: isEnvLive }),
  new HtmlWebpackPlugin({ minify: isEnvLive, ...HTML }),
  ...(isEnvLive
    ? [
        new MiniCSSExtractPlugin({
          filename: "lib/css/[name].[contenthash:8].css",
          chunkFilename: "lib/css/[name].[contenthash:8].chunk.css",
        }),
        new WebpackManifestPlugin({ fileName: "asset-manifest.json" }),
        new WebpackPwaManifest({ filename: "manifest.json", ...PWA }),
        new WorkboxPlugin.InjectManifest({
          swSrc: path.public("/service-worker/index.js"),
          swDest: path.dist("service-worker.js"),
          exclude: [/\.(?:png|jpg|jpeg|svg)$/],
        }),
        // new WorkboxPlugin.GenerateSW({
        //   clientsClaim: true,
        //   skipWaiting: true,
        //   exclude: [/\.(?:png|jpg|jpeg|svg)$/],
        // }),
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
];

module.exports = webpackPluginsConfig;

// https://webpack.js.org/configuration/plugins/
//
// If using moment.js, add to plugins:
// new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
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
// On why "csp-html-webpack-plugin" may not be worth including:
// https://github.com/slackhq/csp-html-webpack-plugin/issues/82
