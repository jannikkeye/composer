const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "./src/index.tsx"),
    "react.plain": path.resolve(__dirname, "./src/apps/react/react.plain.tsx"),
    "react.shadow": path.resolve(
      __dirname,
      "./src/apps/react/react.shadow.tsx"
    ),
    "vanilla.plain": path.resolve(
      __dirname,
      "./src/apps/vanilla/vanilla.plain.ts"
    ),
    "vanilla.shadow": path.resolve(
      __dirname,
      "./src/apps/vanilla/vanilla.shadow.ts"
    ),
    "vue.plain": path.resolve(__dirname, "./src/apps/vue/vue.plain.ts"),
    "vue.shadow": path.resolve(__dirname, "./src/apps/vue/vue.shadow.ts"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      vue$: "vue/dist/vue.esm-bundler.js",
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Composer",
      excludeChunks: [
        "react.shadow",
        "react.plain",
        "vanilla.shadow",
        "vanilla.plain",
        "vue.shadow",
        "vue.plain",
      ],
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
