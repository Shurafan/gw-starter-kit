const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const paths = require('./src/configs/paths.config.js');

const { clean } = require('./src/configs/tasks/clean');
const { moveStatic } = require('./src/configs/tasks/move-static');
const { templates } = require('./src/configs/tasks/templates');
const { styles } = require('./src/configs/tasks/styles');
const { scripts } = require('./src/configs/tasks/scripts');
const { fonts } = require('./src/configs/tasks/fonts');
const { images } = require('./src/configs/tasks/images');
const { deployCreate } = require('./src/configs/tasks/deploy-create');
const { deployRsync } = require('./src/configs/tasks/deploy-rsync');

const webpack = require('webpack-stream');

exports.moveStatic = moveStatic;
exports.templates = templates;
exports.styles = styles;
exports.scripts = scripts;
exports.fonts = fonts;
exports.images = images;
exports.deployCreate = deployCreate;
exports.deploy = deployRsync;
exports.clean = clean;

// слежка
function watch() {
	gulp.watch(paths.watch.static, moveStatic);
	gulp.watch(paths.watch.scss, wpStream);
	gulp.watch(paths.watch.twig, templates);
	gulp.watch(paths.watch.js, wpStream);
	gulp.watch(paths.watch.fonts, fonts);
	gulp.watch(paths.watch.img, images);
}

// следим за dist и релоадим браузер
function server() {
	browserSync.init({
		server: {
			baseDir: paths.dirs.dist,
			index: "index.html"
		},
		plugins: ['bs-pretty-message']
	});
	browserSync.watch(paths.watch.bs, browserSync.reload);
}

const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Convert = require('ansi-to-html');
const convert = new Convert();

function wpStream(done) {
	return webpack({
		mode: "development",
		devServer: {
			open: true,
			port: 3000,
		},
		entry: [
			'./src/assets/js/index.js',
			'./src/assets/scss/index.scss'
		],
		output: {
			filename: "js/[name].js",
			clean: true,
		},
		performance: {
			maxEntrypointSize: Infinity,
			maxAssetSize: Infinity
		},
		optimization: {
			splitChunks: {
				chunks: 'all',
				maxInitialRequests: Infinity,
				minSize: 0,
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: "vendor"
					},
				},
			},
			minimizer: [
				new CssMinimizerPlugin({
					minimizerOptions: {
						preset: [
							"default",
							{
								discardComments: { removeAll: true },
							},
						],
					},
				}),
				new TerserPlugin({
					test: /\.js(\?.*)?$/i,
					parallel: true,
					terserOptions: {
						mangle: true,
						output: {
							comments: false,
						},
					},
				})
			],
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /^_(\w+)(\.js)$|node_modules/,
					use: {
						loader: 'babel-loader'
					}
				},
				{
					test: /\.(scss|sass|css)$/i,
					include: [
						path.resolve(__dirname, 'node_modules'),
						path.resolve(__dirname, "src/assets/scss"),
					],
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {},
						},
						{
							loader: "css-loader",
							options: {
								sourceMap: true,
								url: false,
							},
						},
						{
							loader: "sass-loader",
							options: {
								implementation: require("sass"),
								sourceMap: true,
							},
						},
					],
				},
			],
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: "css/main.css",
			}),
		]
	})
		.on( 'error', function( error ) {
			setTimeout(function () {
				browserSync.sockets.emit('fullscreen:message', {
					title: "ОШИБКА!!!",
					body:  convert.toHtml(error.message)
				});
			}, 1000);
			done();
		} )
		.pipe(gulp.dest(paths.dist.wpStream));
}

/** Задачи */
gulp.task('default', gulp.series(
	clean,
	gulp.parallel(moveStatic, fonts, images, wpStream, templates),
	gulp.parallel(watch, server)
));

exports.wpStream = wpStream;

	gulp.task('build', gulp.series(
	clean,
	gulp.parallel(moveStatic, fonts, images, wpStream, templates)
));
