"use strict";

module.exports = {
	global: {
		srcPath: "./app/",
		buildPath: "./build",
		preprocessParams: {
			TIMESTAMP: new Date().getTime()
		}
	},
	css: {
		srcPath: 'css/',
		appPath: 'modules/',
		commonPath: 'common/',
		manifest: 'application'
	}
};