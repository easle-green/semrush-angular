'use strict';

angular.module('semAng')

	.config(function($routeProvider) {
		$routeProvider

			.when('/stats', {
				templateUrl: 'views/stats.html',
				controller: 'StatsCtrl'
			})

	});
