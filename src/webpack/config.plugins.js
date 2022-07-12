const { ProvidePlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const HTMLWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const WebpackPWAManifest = require("webpack-pwa-manifest");
const WorkboxPlugin = require("workbox-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const public = require("../public");
const shared = require("../shared");

const webpackPluginsConfig = ({ isEnvLive }) => [
  new ProvidePlugin({ process: "process/browser" }),
  new CleanWebpackPlugin({ cleanStaleWebpackAssets: isEnvLive }),
  new HTMLWebpackPlugin({ minify: isEnvLive, ...public.html }),
  ...(isEnvLive
    ? [
        // --flow-googleTagManager-2
        shared.CONSTANT.GOOGLE.TAG_MANAGER_ID &&
          new HTMLWebpackPartialsPlugin({
            path: shared.util.makePath.public("/html/gtag.html"),
            location: "head",
            options: {
              googleTagManagerId: shared.CONSTANT.GOOGLE.TAG_MANAGER_ID,
            },
          }),
        new MiniCSSExtractPlugin({
          filename: "lib/css/[name].[contenthash:8].css",
          chunkFilename: "lib/css/[name].[contenthash:8].chunk.css",
        }),
        new WebpackManifestPlugin({
          fileName: "asset-manifest.json",
        }),
        new WebpackPWAManifest({
          filename: "manifest.json",
          ios: true,
          ...public.pwa,
        }),
        new WorkboxPlugin.InjectManifest({
          swSrc: shared.util.makePath.public("/service-worker/index.js"),
          swDest: shared.util.makePath.dist("/service-worker.js"),
          exclude: [/\.(?:png|jpg|jpeg|svg)$/],
        }),
      ]
    : [
        new MiniCSSExtractPlugin(),
        new ESLintPlugin({
          eslintPath: require.resolve("eslint"),
          extensions: ["js", "mjs", "jsx", "ts", "tsx"],
          context: shared.util.makePath.client(),
          baseConfig: {
            extends: [require.resolve("eslint-config-react-app/base")],
            ...share.CONSTANT.SETTING.ESLINT,
          },
        }),
      ]),
];

module.exports = webpackPluginsConfig;

/*

  https://webpack.js.org/configuration/plugins/
  https://www.npmjs.com/package/clean-webpack-plugin
  https://www.npmjs.com/package/html-webpack-plugin
  https://www.npmjs.com/package/html-webpack-partials-plugin
  https://www.npmjs.com/package/mini-css-extract-plugin
  https://www.npmjs.com/package/webpack-manifest-plugin
  https://www.npmjs.com/package/webpack-pwa-manifest
  https://www.npmjs.com/package/workbox-webpack-plugin
  https://www.npmjs.com/package/eslint-webpack-plugin
  https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
  https://developers.google.com/web/tools/workbox/guides/get-started
  
  If using moment.js, add to plugins:
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

  Out-of-the-box service worker solution:
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      exclude: [/\.(?:png|jpg|jpeg|svg)$/],
    }),
  
  On why "csp-html-webpack-plugin" may not be worth including:
    https://github.com/slackhq/csp-html-webpack-plugin/issues/82

*/
