'use strict';

angular.module('semAng.models')

	/*
	 * Методы взаимодействия с localStorage
	 */
	.factory('Storage', function($localStorage, $sessionStorage) {
		return {
			favorites: null,
			stats: null,

			init: function() {
				if (this.favorites === null) {
					if ($localStorage.favorites !== undefined && $localStorage.favorites.length > 0) {
						this.favorites = $localStorage.favorites;
					} else {
						this.favorites = [];
					}
				}

				if (this.stats === null) {
					if ($localStorage.stats !== undefined && typeof $localStorage.stats === 'object') {
						this.stats = $localStorage.stats;
					} else {
						this.stats = {};
					}
				}

				return this.favorites;
			},

			add: function(id, brand) {
				id = parseInt(id);
				if (id && this.favorites.indexOf(id) === -1) {
					this.favorites.push(id);
				}

				var current_stats = this.stats[brand];
				if (current_stats === undefined) {
					this.stats[brand] = 1;
				} else {
					this.stats[brand]++;
				}

				this.writeStorage();
			},

			remove: function(id) {
				id = parseInt(id);
				if (id && this.favorites.indexOf(id) > -1) {
					this.favorites = _.without(this.favorites, id);
					this.writeStorage();
				}
			},

			clearFavs: function() {
				this.favorites = [];
				this.writeStorage();
			},

			clearStats: function() {
				this.stats = {};
				this.writeStorage();
			},

			writeStorage: function() {
				$localStorage.favorites = this.favorites;
				$localStorage.stats = this.stats;
			}
		}
	});
