var gulp = require('gulp'),
	clean = require('gulp-clean'),
	config  = require("../config");

gulp.task('clean', function() {
	return gulp.src(config.global.buildPath + '/*', {read: false})
		.pipe(clean());
});