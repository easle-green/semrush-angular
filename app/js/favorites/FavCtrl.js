'use strict';

angular.module('semAng')

	/*
	 * Количество выбранных в данный момент авто
	 */
	.controller('FavCountCtrl', function($scope, Storage) {
		Storage.init();

		$scope.count = function() {
			return Storage.favorites.length;
		};
	})

	/*
	 * Контроллер таблицы сохранённых автомобилей
	 */
	.controller('FavCtrl', function($scope, $controller, Storage, CurrentBrand, cars) {
		$scope.autosList = cars;
		$scope.currentBrand = CurrentBrand;
		CurrentBrand.setBrand('');
		$scope.favorite_list = true;
		$scope.disableSticking = false;

		function buildList() {
			return _.filter($scope.autosList, function(car) {
				return Storage.favorites.indexOf( parseInt(car.id) ) > -1 ;
			});
		}

		if (Storage.favorites.length > 0) {
			$scope.cars = buildList();
		} else {
			$scope.cars = [];
		}

		$scope.remove = function(id) {
			Storage.remove(id);
			$scope.cars = buildList();
		};

		$scope.clearAll = function() {
			Storage.clearFavs();
			$scope.cars = [];
		};

		$controller('ZoomCtrl');
	});