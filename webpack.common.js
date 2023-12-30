const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); // Import webpack
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  // module
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /fontawesome-free\.css$/, // Move this inside the rules array
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fontawesome-free/[name].[ext]",
            },
          },
        ],
      },
    ],
  },

  // plugin
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        // Your loader options here
        // For example, you can use this for some modules
        // use: ...
      },
    }),
  ],
};
