const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { allowedNodeEnvironmentFlags } = require("process");
const copyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtracPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const { config } = require("webpack");

console.log("is dev", isDev);
console.log("is prod", isProd);

// const optimisation = () => {
//   const config = {
//     splitChunks: {
//       chunks: "all",
//     },
//   };
// };

// if (isProd) {
//   config.minimizer = [
//     new OptimizeCssAssetsWebpackPlugin( {
//       cssProcessorPluginOptions: {
//         preset: ["default", { discardComments: { removeAll: true } }],
//       }
//     }),
//     new TerserWebpackPlugin()
//   ]
// return config;
// // }

// const filename = (ext) => isDev ? `[name].$(ext)`: `[name].[fullhash].$(ext)`;



module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: "./index.js",
    stat: "./stats.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: filename("js"),
  },
  resolve: {
    extensions: [".js", ".json", ".png", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@model": path.resolve(__dirname, "src/model"),
      "@css": path.resolve(__dirname, "src/css"),
    },
  },
  // optimization: optimisation(),
  // devServer: {
  //   port: 4200,
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),

    new CleanWebpackPlugin(),
    new copyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/favicon.png"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
    new MiniCssExtracPlugin({
      // filename: filename("css"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtracPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-typescript"
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtracPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtracPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          "css-loader",
          "less-loader",
        ],
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
