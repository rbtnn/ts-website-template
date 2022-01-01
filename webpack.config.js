
const path = require('path');

module.exports = {
	//mode: 'development',
	mode: 'production',
	entry: './src/index.ts',
	output: {
		path: path.join(__dirname, "public/dist"),
		filename: "main.js"
	},
	module: {
		rules: [{
			test: /\.ts$/,
			use: 'ts-loader'
		}]
	},
	resolve: {
		modules: [
			"node_modules",
		],
		extensions: [
			'.js',
			'.ts',
		]
	}
}
