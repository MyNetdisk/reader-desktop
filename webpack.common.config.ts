import { CleanWebpackPlugin } from "clean-webpack-plugin";

type modeType = "production" | "development";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require("html-webpack-plugin");

export default {
  output: {
    path: path.resolve(__dirname, "dist"), // 输出目录
    filename: "[name].bundle.js", // 输出的文件名
    publicPath: "/", // 公共路径
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // 支持的文件类型
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // 使用 Babel 处理 JavaScript 和 React
        },
      },
      {
        test: /\.css$/, // 支持 CSS 文件
        use: ["style-loader", "css-loader"], // 处理 CSS 文件
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // 图片文件处理
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // 在构建前清理输出目录
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // 允许省略的后缀
  },
  mode:
    process.env.NODE_ENV === "production"
      ? "production"
      : ("development" as modeType), // 根据环境设置模式
};
