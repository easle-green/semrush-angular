'use strict';

angular.module('semAng')

	/*
	 * Кастомный фильтр для возврата значений в соответствии с выбранным брендом
	 */
	.filter('brandFilter', function(CurrentBrand) {
		return function(cars) {
			var selectedBrand = CurrentBrand.brand;

			if (!selectedBrand) {
				return cars;
			} else {
				return _.where(cars, {brand: selectedBrand})
			}
		}
	});
