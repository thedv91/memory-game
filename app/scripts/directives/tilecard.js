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
			template: '<div></div>',
			restrict: 'E',
			link: function postLink(scope, element) {
				element.text('this is the tileCard directive');
			}
		};
	});