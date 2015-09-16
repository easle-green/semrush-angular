'use strict';

angular.module('semAng.models')

	/*
	 * Возвращает список авто. Подразумевается, что ответ приходит с сервера
	 * (в нашем случае - берётся из файла)
	 */
	.factory('Autos', function($resource) {
		return $resource('/public/auto_list.json', {}, {
			get: {
				responseType: 'json',
				isArray: true,
				transformResponse: function(response) {
					//console.log(response);
					return response;
				}
			}
		});
	});
