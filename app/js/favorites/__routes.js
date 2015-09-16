'use strict';

angular.module('semAng')

	.config(function($routeProvider) {
		$routeProvider

			.when('/favorites', {
				templateUrl: 'views/list.html',
				controller: 'FavCtrl',
				resolve: {
					cars: function(Autos) {
						return Autos.get().$promise;
					}
				}
			})

	});
