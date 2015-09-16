'use strict';

angular.module('semAng')

	/*
	 * Контроллер страницы статистики
	 */
	.controller('StatsCtrl', function($scope, Storage) {

		$scope.clearAll = function() {
			Storage.clearStats();
			$scope.data = [];
		};

		$scope.data = [];

		_.each(Storage.stats, function(value, key){
			$scope.data.push({
				name: key,
				y: value
			});
		});

		$scope.chartConfig = {
			options: {
				chart: {
					type: 'column'
				},
				tooltip: {
					style: {
						padding: 10,
						fontWeight: 'bold'
					},
					headerFormat: '',
					pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
				},
				legend: {
					enabled: false
				},
				colors: [
					'#876CB1',
					'#A898C1',
					'#CCC6D6',
					'#DADADA'
				]
			},
			loading: false,
			title: {
				text: 'Статистика добавления в избранное по производителям.'
			},
			xAxis: {
				type: 'category',
				title: {
					text: 'Производители автомобилей'
				}
			},
			yAxis: {
				title: {
					text: 'Количество кликов'
				}
			},
			series: [{
				name: "Производители",
				colorByPoint: true,
				borderWidth: 0,
				dataLabels: {
					enabled: true,
					format: '{point.y}'
				},
				data: $scope.data
			}]
		};

	});