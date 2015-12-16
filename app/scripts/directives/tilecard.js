'use strict';

/**
 * @ngdoc directive
 * @name memoryGameApp.directive:tileCard
 * @description
 * # tileCard
 */
angular.module('memoryGameApp')
	.directive('tileCard', function() {
		return {
			restrict: 'AE',
			scope: {
				tile: '=card'
			},
			templateUrl: 'views/tile.html',
		};
	});