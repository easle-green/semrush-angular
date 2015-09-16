'use strict';

angular.module('semAng')

	/*
	 * Контроллер переключателя бренда
	 */
	.controller('BrandCtrl', function($scope, Autos, Storage, CurrentBrand) {
		$scope.currentBrand = CurrentBrand;

		$scope.switchBrand = function(brand) {
			CurrentBrand.setBrand(brand);
		};

	});