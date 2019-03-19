/* global __dirname, process, require, module */
const pkg = require('./package.json');
const libraryName = pkg.name;

module.exports = {
	entry: './src/main.js',
	output: {
		filename: '[name].min.js',
		library: libraryName,
		libraryTarget: 'umd',
		umdNamedDefine: true,
		globalObject: "typeof self !== 'undefined' ? self : this"
	},
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.js$/,
	// 			exclude: /node_modules/,
	// 			loader: 'babel-loader',
	// 			// options: {
	// 			// 	...JSON.parse(fs.readFileSync(path.resolve(__dirname, './.babelrc'))),
	// 			// },
	// 		}
	// 	]
	// },
	stats: {
		colors: true
	},
	devtool: 'source-map'
};
