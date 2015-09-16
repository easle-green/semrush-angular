'use strict';

angular.module('semAng.directives')

	/*
	 * Директива рисует li>a (по шаблону) и переключает активный пункт меню
	 */
	.directive('navItem', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/_partials/nav_item.html',
			controller: function($scope, $route, $location, $element, delay) {

				var matchPath = function(path) {
					return path.match( new RegExp('^' + $scope.target) );
				};

				$scope.active = function() {
					return matchPath($location.path());
				};

				var processRoute = function(scope, next, current) {
					if (matchPath(next.$$route.originalPath)) {
						$scope.progress = true;
						$scope.delay = delay(400);

					} else {
						if (!$scope.delay) {
							return;
						}

						$scope.delay.then(function() {
							$scope.progress = false;
						});
					}

					if (next.$$route.originalPath === "/stats") {
						$('#brand-switcher').animate({opacity: 0}, 350);
					} else {
						$('#brand-switcher').animate({opacity: 1}, 150);
					}
				};

				$scope.$on('$routeChangeStart', processRoute);

				var hidingCallback = function(scope, next, current){
					if (!$scope.delay) return;

					$scope.delay.then(function() {
						if (!$scope.delay) return;

						$scope.progress = false;
					});
				};

				$scope.$on('$routeChangeSuccess', hidingCallback);
				$scope.$on('$routeChangeError', hidingCallback);
			},

			link: function(scope, element, attrs) {
				scope.target = attrs.target;
				scope.text = attrs.text;
			},

			scope: {
				warning: '=warnIf'
			}
		};
	})

	.factory('delay', function($q) {
		return function(timeout) {
			return $q(function(resolve, reject) {
				setTimeout(resolve, timeout);
			});
		};
	});

