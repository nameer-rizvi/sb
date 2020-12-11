const { path } = require("../shared");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({ isEnvProduction }) => ({
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      include: path.client(),
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-transform-react-jsx-source",
          ],
        },
      },
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        isEnvProduction ? MiniCssExtractPlugin.loader : "style-loader",
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
