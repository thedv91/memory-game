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
			template: '<div class="flipper"> <div class ="face front"> <p ng-if="tile.isFaceUp" ng-bind="tile.item"> </p> </div> <div class="face back"><!-- back card content --></div></div>'
		};
	});