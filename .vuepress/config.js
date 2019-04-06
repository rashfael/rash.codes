const path = require('path')
module.exports = {
	title: 'rash.codes',
	description: 'personal homepage',
	dest: 'dist',
	head: [
		['link', {href: 'https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700|Quicksand:300,400,500,700|Source+Sans+Pro:300,300i,400,400i,600,700,900', rel: 'stylesheet'}]
	],
	markdown: {
		lineNumbers: true
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@assets': path.resolve('assets')
			}
		}
	}
	// chainWebpack (config, isServer) {
	// 	config.module
	// 		.rule('js')
	// 		.use('babel-loader')
	// 		.tap(options => Object.assign(options, {
	// 			plugins: [
	// 				['@babel/plugin-proposal-optional-chaining', { 'loose': false }],
	// 				['@babel/plugin-proposal-nullish-coalescing-operator', { 'loose': false }],
	// 				'@babel/plugin-syntax-dynamic-import',
	// 				'@babel/plugin-proposal-json-strings'
	// 			]
	// 		}))
	// }
}
