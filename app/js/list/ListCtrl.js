'use strict';

angular.module('semAng')

	/*
	 * Контроллер таблицы автомобилей
	 */
	.controller('ListCtrl', function($scope, $controller, Autos, Storage, CurrentBrand) {
		$scope.cars = $scope.autosList = Autos.get();
		$scope.currentBrand = CurrentBrand;
		CurrentBrand.setBrand('');

		$scope.isFave = function(id) {
			return Storage.favorites.indexOf( parseInt(id) ) > -1;
		};

		$scope.favorite = function(car) {
			if($scope.isFave( parseInt(car.id) )) {
				Storage.remove(car.id);
			} else {
				Storage.add(car.id, car.brand);
			}
		};

		$controller('ZoomCtrl');
	});