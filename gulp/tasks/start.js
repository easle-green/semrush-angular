var gulp = require('gulp'),
	webserver = require('gulp-webserver'),
	pp = require('preprocess'),
	fs = require('fs'),
	config  = require("../config");

gulp.task('start', ['stylus:app:precompile'], function() {

	gulp.watch([config.global.srcPath + config.css.srcPath + config.css.appPath + "**/*"], ["stylus:app:precompile"]);
	gulp.watch([config.global.srcPath + config.css.srcPath + config.css.manifest + ".styl"], ["stylus:app:precompile"]);
	gulp.watch([config.global.srcPath + config.css.srcPath + config.css.login + '.styl'], ["stylus:login:precompile"]);

	gulp.src('.')
		.pipe(webserver({
			middleware: function(req, res, next) {
				if (!req.url.match(/(\.html|\/)$/)) return next();

				var path = req.url.replace(/^\//, '');
				if (path.match(/\/$/)) {
					path += 'index.html';
				}

				if (!fs.existsSync(path)) return next();

				var text = fs.readFileSync(path);

				var processed = pp.preprocess(text, config.global.preprocessParams, 'html');
				//console.log(processed);

				res.end( processed );
			}
		}));
});