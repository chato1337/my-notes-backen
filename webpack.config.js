require('dotenv').config()
const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require('nodemon-webpack-plugin'); // Ding

module.exports = {
	mode: process.env.MODE,
	entry: {
		server: "./index.js",
	},
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: "/",
		filename: "index.js",
	},
	target: "node",
	node: {
		// Need this when working with express, otherwise the build fails
		__dirname: false, // if you don't put this is, __dirname
		__filename: false, // and __filename return blank or /
	},
	externals: [nodeExternals()], // Need this to avoid error when working with Express
	module: {
		rules: [
			{
				// Transpiles ES6-8 into ES5
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: [/node_modules/],
				loader: "ts-loader",
			},
		],
	},
	plugins: [
		new NodemonPlugin(), // Dong
	],
	resolve: {
		extensions: [".ts", ".js"],
	},
};
