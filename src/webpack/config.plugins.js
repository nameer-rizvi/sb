const { ProvidePlugin, HotModuleReplacementPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const _public = require("../public");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const ESLintPlugin = require("eslint-webpack-plugin");
const { path, settings } = require("../shared");

module.exports = ({ isEnvProduction }) => [
  new ProvidePlugin({ process: "process/browser" }),
  new CleanWebpackPlugin({
    cleanStaleWebpackAssets: Boolean(isEnvProduction),
  }),
  new HtmlWebpackPlugin({ minify: isEnvProduction, ..._public.html }),
  ...(isEnvProduction
    ? [
        new MiniCSSExtractPlugin({
          filename: "lib/css/[name].[contenthash:8].css",
          chunkFilename: "lib/css/[name].[contenthash:8].chunk.css",
        }),
        new GenerateSW({ exclude: [/\.(?:png|jpg|jpeg|svg)$/] }),
        new WebpackManifestPlugin({ fileName: "asset-manifest.json" }),
        new WebpackPwaManifest({ filename: "manifest.json", ..._public.pwa }),
      ]
    : [
        new HotModuleReplacementPlugin(),
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

// https://webpack.js.org/configuration/plugins/
//
// If using moment.js, add to plugins:
// new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
//
// https://www.npmjs.com/package/mini-css-extract-plugin
// https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
// https://developers.google.com/web/tools/workbox/guides/get-started
// https://www.npmjs.com/package/webpack-manifest-plugin
// https://www.npmjs.com/package/webpack-pwa-manifest
// https://www.npmjs.com/package/eslint-webpack-plugin
// https://www.npmjs.com/package/clean-webpack-plugin
// https://www.npmjs.com/package/html-webpack-plugin
