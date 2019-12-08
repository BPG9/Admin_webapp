var path = require("path");
const webpack = require("webpack");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
var LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "/public"),
    hot: true,
    host: "0.0.0.0",
    port: "8090",
    disableHostCheck: false
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          query: {
            plugins: [
              [require("babel-plugin-transform-imports"), {
                "my-library": {
                  transform: function (importName, matches) {
                    return "my-library/etc/" + importName.toUpperCase();
                  },
                  preventFullImport: true
                }
              }]
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  }
};
