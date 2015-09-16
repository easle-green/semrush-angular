var gulp = require('gulp'),
	config  = require("../config");

gulp.task('copy_app', ['clean'], function() {
	gulp.src([
		'app/**/*.png',
		'app/**/*.jpg',
		'app/**/*.ico',
		'app/**/*.gif',
		'app/**/*.swf'
	])
		.pipe(gulp.dest(config.global.buildPath));

	return gulp.src('app/fonts/**/*.*')
		.pipe(gulp.dest(config.global.buildPath + '/fonts'));
});