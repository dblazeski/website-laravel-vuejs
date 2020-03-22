const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
require('laravel-mix-purgecss')

mix.webpackConfig({
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				exclude: /node_modules/,
			},
		],
	},
})
	.sass('resources/sass/app.scss', 'public/css')
	.options({
		processCssUrls: false,
		postCss: [ tailwindcss('./tailwind.config.js') ],
	})
	.purgeCss()
	.js('resources/js/app.js', 'public/js')
