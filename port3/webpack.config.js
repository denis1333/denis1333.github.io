'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'babel-polyfill',
		__dirname+"/assets/js/home.js" // путь от webpack.conf
	],
	output: {
		path: __dirname+"/public",   // путь от webpack.conf
		filename: "scripts.js"
	},
	watch: NODE_ENV == 'development',
	devtool: NODE_ENV == 'development' ? "sourse-map" : null,
	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV),
			LANG : '"ru"',
		}),
		new ExtractTextPlugin('style.css'), // путь от home.js
		new webpack.ProvidePlugin({
			'$':'jquery',
		}),
	],

	module: {
		loaders:[
			{
				test: /\.js$/,
				loader: 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0',

			},
			{
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
	                use: [{
	                    loader: "css-loader"
	                }, {
	                    loader: "less-loader"
	                }],
	                fallback: "style-loader"
	            })
            },
	        {
	            test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
	            loader: 'file-loader?outputPath=public'     //путь от webpack.conf?
	        }
		]
	},
}