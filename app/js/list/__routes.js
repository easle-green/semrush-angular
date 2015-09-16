'use strict';

angular.module('semAng')

	.config(function($routeProvider) {
		$routeProvider

			.when('/list', {
				templateUrl: 'views/list.html',
				controller: 'ListCtrl'
			})

	});
