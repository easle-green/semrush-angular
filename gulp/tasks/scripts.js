var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	ngAnnotate = require('gulp-ng-annotate'),
	clean = require('gulp-clean'),
	config  = require("../config");

var jsFiles = [
	"bower_components/jquery/dist/jquery.min.js",
	"bower_components/bootstrap/dist/js/bootstrap.min.js",
	"bower_components/underscore/underscore-min.js",
	"bower_components/angular/angular.js",
	"bower_components/angular-sanitize/angular-sanitize.js",
	"bower_components/angular-route/angular-route.js",
	"bower_components/angular-resource/angular-resource.js",
	"bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
	"bower_components/ngstorage/ngStorage.min.js",
	"bower_components/highcharts-release/highcharts.js",
	"bower_components/highcharts-ng/dist/highcharts-ng.min.js",

	"app/js/application.js",
	"app/js/common/directives/navigation.js",
	"app/js/common/models/Autos.js",
	"app/js/common/models/Storage.js",

	"app/js/brand/_CurrentBrand.js",
	"app/js/brand/BrandCtrl.js",

	"app/js/list/__routes.js",
	"app/js/list/__filters.js",
	"app/js/list/ListCtrl.js",
	"app/js/list/ZoomCtrl.js",

	"app/js/favorites/__routes.js",
	"app/js/favorites/FavCtrl.js",

	"app/js/stats/__routes.js",
	"app/js/stats/StatsCtrl.js"

];

gulp.task('js', ['clean'], function () {
	return gulp.src(jsFiles)
		.pipe(concat('assets/javascripts.min.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(gulp.dest(config.global.buildPath));

});
