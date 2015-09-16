'use strict';

angular.module('semAng')

	/*
	 * Хранит текущий выбранный бренд
	 */
	.factory('CurrentBrand', function() {
		return {
			brand: '',

			setBrand: function(brand) {
				this.brand = brand;
			}
		}
	});