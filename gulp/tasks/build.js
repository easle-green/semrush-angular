var gulp = require('gulp'),
	preprocess = require('gulp-preprocess'),
	config  = require("../config");

gulp.task('build', ['js', 'css', 'copy_app'], function() {
	var params = config.global.preprocessParams;
	params.BUILD = true;

	return gulp.src('app/**/*.html')
		.pipe(preprocess({
			context: params
		}))
		.pipe(gulp.dest(config.global.buildPath));
});