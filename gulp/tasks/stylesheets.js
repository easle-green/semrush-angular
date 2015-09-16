var gulp = require('gulp'),
	concat = require('gulp-concat'),
	cssBase64 = require('gulp-css-base64'),
	rimraf    = require('gulp-rimraf'),
	sourcemaps = require('gulp-sourcemaps'),
	cleancss = require('gulp-cleancss'),
	stylus = require('gulp-stylus'),
	nib = require('nib'),
	config  = require("../config"),

	fullPath = config.global.srcPath + config.css.srcPath,
	cssFiles = [
		"bower_components/bootstrap/dist/css/bootstrap.css",
		"app/css/application.css"
	];

gulp.task('stylus:app:clean', function(){
	var manifestPath = fullPath + config.css.manifest + '.css';
	return gulp.src(manifestPath, { read: false })
		.pipe(rimraf())
});

gulp.task('stylus:app:precompile', ['stylus:app:clean'], function(){
	var manifestPath = fullPath + config.css.manifest + '.styl';

	return gulp.src(manifestPath)
		.pipe(stylus({
			use: nib(),
			linenos: true
		}))
		.pipe(concat(config.css.manifest + '.css'))
		.pipe(gulp.dest(fullPath));
});

gulp.task('stylus:app:compile', ['stylus:app:clean'], function(){
	var manifestPath = fullPath + config.css.manifest + '.styl';

	return gulp.src(manifestPath)
		.pipe(stylus({
			use: nib(),
			compress: true
		}))
		.pipe(concat(config.css.manifest + '.css'))
		.pipe(gulp.dest(fullPath));
});

gulp.task('css', ['clean', 'stylus:app:compile'], function () {
	return gulp.src(cssFiles)
		.pipe(cssBase64())
		.pipe(cleancss())
		.pipe(concat('assets/stylesheet.min.css'))
		.pipe(gulp.dest(config.global.buildPath));
});