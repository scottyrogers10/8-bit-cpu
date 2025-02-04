const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	entry: ["./src/index.js"],
	module: {
		rules: [
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },
			{ exclude: /node_modules/, test: /\.js$/, use: ["babel-loader"] },
			{ test: /\.(png|jpe?g|gif)$/i, use: [{ loader: "file-loader" }] },
		],
	},
	output: {
		chunkFilename: "chunks/[name].js",
		filename: "[name].js",
		path: path.resolve(__dirname, "../dist"),
		publicPath: "/",
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyPlugin({ patterns: [{ from: "./public/assets/styles", to: "./assets/styles/" }] }),
		new HtmlWebpackPlugin({
			favicon: "./public/assets/images/favicon.ico",
			inject: true,
			template: "./public/index.html",
		}),
		new webpack.ProgressPlugin(),
	],
};
