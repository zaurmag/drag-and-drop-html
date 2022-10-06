let path = require('./path/path.js')

module.exports = function () {
	const fn = () => {
		console.log('Copy js')
	}

	$.gulp.task('js:build', (done) => {
		return $.gulp.src($.webpackConfig.entry)
			.pipe($.plugins.plumber())
			.pipe($.webpackStream($.webpackConfig))
			.pipe($.gulp.dest(path.path.build.js))
			// .pipe($.gulp.dest($.plugins.if($.yargs.copy, path.path.copy + '/js/')))
			// .pipe($.plugins.if($.yargs.copy, $.gulp.dest(path.path.copy + '/js/')))
			.pipe($.browserSync.reload({ stream: true }))
	})
}
