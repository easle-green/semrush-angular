'use strict';

angular.module(
	'semAng.controllers',
	[
		'ngSanitize',
		'ngResource'
	]
);

angular.module(
	'semAng.models',
	[
		'ngSanitize',
		'ngResource',
		'ngStorage'
	]
);

angular.module(
	'semAng.directives',
	[
		'ngSanitize',
		'ngResource'
	]
);

var semAng = angular.module('semAng', [
	'ngRoute',
	'highcharts-ng',
	'ui.bootstrap',
	'semAng.models',
	'semAng.directives',
	'semAng.controllers'
]);

semAng.config(['$routeProvider', function($routeProvider) {
	$routeProvider

		.when('/', {
			redirectTo: '/list'
		});

}]);
