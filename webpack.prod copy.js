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
  mode: "production",
  entry: {
    index: "./src/index.js"
  },
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "/public"),
    hot: true,
    host: "0.0.0.0",
    disableHostCheck: false
  },
  plugins: [
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 10000 // Minimum number of characters
    }),
    new webpack.ContextReplacementPlugin(
      /moment[/\\]locale$/,
      /de|fr|us/
    ),
  ],
  // optimization: {
  //   minimizer: [new TerserPlugin({
  //     cache: true,
  //     parallel: true,
  //     extractComments: true,
  //   })],
  //   splitChunks: {
  //     // minChunks: 10,
  //     cacheGroups: {
  //       default: false,
  //       vendor: {
  //         test: /[\\/]node_modules[\\/](react|react-dom|lodash|react-router-dom)[\\/]/,
  //         name: '1',
  //         chunks: 'initial',
  //         priority: -100,
  //         enforce: true
  //       },
  //       icon: {
  //         test: /[\\/]node_modules[\\/]@ant-design[\\/]/,
  //         name: '2',
  //         chunks: 'initial',
  //         priority: -99,
  //         enforce: true
  //       },
  //       material: {
  //         test: /[\\/]node_modules[\\/]@material-ui[\\/]core[\\/]/,
  //         name: '3',
  //         chunks: 'initial',

  //         enforce: true,
  //       },
  //       code: {
  //         test: /[\\/]src[\\/]app[\\/]/,
  //         name: '4',
  //         chunks: 'initial',
  //         priority: -98,
  //         enforce: true,
  //         reuseExistingChunk: true
  //       },
  //       node1: {
  //         test: /[\\/]node_modules[\\/](material-table|react-beautiful-dnd)[/\\]/,
  //         name: '5',
  //         chunks: 'initial',
  //         priority: -97,
  //         enforce: true,
  //         reuseExistingChunk: true
  //       },
  //       node2: {
  //         test: /[\\/]node_modules[\\/](moment|rc-select|rc-trigger|rc-align|rc-animate|react-redux)[/\\]/,
  //         name: '6',
  //         chunks: 'initial',
  //         priority: -97,
  //         enforce: true,
  //         reuseExistingChunk: true
  //       },
  //       node3: {
  //         test: /[\\/]node_modules[\\/](react-dates|antd)[/\\]/,
  //         name: '7',
  //         chunks: 'initial',
  //         priority: -97,
  //         enforce: true,
  //         reuseExistingChunk: true
  //       },
  //       node4: {
  //         test: /[\\/]node_modules[\\/](@material-ui|algoliasearch|react-swipeable-views)[/\\]/,
  //         name: '8',
  //         chunks: 'initial',
  //         priority: -97,
  //         enforce: true,
  //         reuseExistingChunk: true
  //       },
  //       node5: {
  //         test: /[\\/]node_modules[\\/](date-io|google-map-react|react-slick|date-fns|jss|rc-menu)[/\\]/,
  //         name: '9',
  //         chunks: 'initial',
  //         priority: -97,
  //         enforce: true,
  //         reuseExistingChunk: true
  //       },
  //       node6: {
  //         test: /[\\/]node_modules[\\/](popper.js|core-js|es-abstract|redux|dom-align|tinycolor2|react-router|axios|react-resize-detector|rc-pagination|history)[/\\]/,
  //         name: '0',
  //         chunks: 'initial',
  //         priority: -97,
  //         enforce: true,
  //         reuseExistingChunk: true
  //       },
  //     }
  //   }
  // },
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
