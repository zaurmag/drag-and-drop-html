const path = require('./path/path.js')

module.exports = function () {
	$.gulp.task('resources:build', () => {
		return $.gulp.src(path.path.src.resources)
			.pipe($.plugins.changed(path.path.build.root))
			// .pipe($.plugins.if($.yargs.copy, $.gulp.dest(path.path.copy)))
			.pipe($.gulp.dest(path.path.build.root))
	})
}
