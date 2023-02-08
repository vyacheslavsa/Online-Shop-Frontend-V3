const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin")
const Dotenv = require('dotenv-webpack');

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: ["@babel/polyfill", "./index.jsx"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        clean: true,
    },
    devServer: {
        port: 3000,
        devMiddleware: { writeToDisk: true },
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
        }),
        new Dotenv(),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/assets"),
                    to: path.resolve(__dirname, "dist"),
                },
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                use: ["file-loader"],
            },
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx']
    }
};