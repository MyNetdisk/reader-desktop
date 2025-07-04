import type { Configuration } from "webpack";
import { rules } from "./webpack.rules";
import { plugins } from "./webpack.plugins";
import { merge } from "webpack-merge";
import commonConfig from "./webpack.common.config.ts";

rules.push(
  {
    test: /\.css$/,
    use: [{ loader: "style-loader" }, { loader: "css-loader" }],
  },
  {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-react", "@babel/preset-env"],
      },
    },
  }
);

export const rendererConfig: Configuration = merge<Configuration>(
  commonConfig,
  {
    module: {
      rules,
    },
    plugins,
    resolve: {
      extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
    },
  }
);
