const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { allowedNodeEnvironmentFlags } = require("process");
const  copyWebpackPlugin  = require("copy-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: "./index.js",
    stat: "./stats.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  resolve: {
    extensions: [".js", ".json", ".png", ".jsx", ".ts", ".tsx"],
    alias: {
      '@':path.resolve(__dirname, 'src'),
      '@model':path.resolve(__dirname, 'src/model'),
      '@css':path.resolve(__dirname, 'src/css')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    port: 4200
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),

    new CleanWebpackPlugin(),
    new copyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/favicon.png'),
        to: path.resolve(__dirname, 'dist')
      }]
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpeg|gif|svg|jpg|webp)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ["file-loader"],
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
    ],
  },
};
