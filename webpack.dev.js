const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "public"),
    hot: true,
    host: "0.0.0.0",
    disableHostCheck: false,
    port: 8081
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
  ]
};
