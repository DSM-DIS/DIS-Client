const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = 3000;

module.exports = {
	entry: {
		app: ["babel-polyfill", "./src/index.js"],
	},
	resolve: {
		extensions: [".js"],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env", "@babel/preset-react"],
					plugins: ["@babel/plugin-proposal-class-properties"],
				},
			},
			{
				test: /\.(jpg|png|jpeg|bmp|gif|svg|ico)?$/,
				loader: "file-loader",
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
						options: {
							modules: true,
						},
					},
				],
			},
		],
	},
	output: {
		publicPath: "/",
		path: path.join(__dirname + "/dist"),
		filename: "bundle.[hash].js",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html",
		}),
	],
	devServer: {
		host: "localhost",
		port: port,
		// open: true,
		historyApiFallback: true,
		hot: true,
	},
};
