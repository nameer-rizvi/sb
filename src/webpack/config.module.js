const { path } = require("../shared");
const MiniCssExtractPluginLoader = require("mini-css-extract-plugin").loader;

module.exports = ({ isEnvProduction }) => ({
  rules: [
    { parser: { requireEnsure: false } },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      include: path.client(),
      // *** From previous config ***
      // enforce: !isEnvProduction ? "pre" : null,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-transform-react-jsx-source",
            "@babel/plugin-syntax-dynamic-import",
          ],
        },
      },
    },
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        isEnvProduction ? MiniCssExtractPluginLoader : "style-loader",
        "css-loader",
        "sass-loader",
      ],
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      type: "asset/resource",
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      type: "asset/resource",
    },
  ],
});

// https://webpack.js.org/configuration/module/
// https://www.npmjs.com/package/mini-css-extract-plugin
