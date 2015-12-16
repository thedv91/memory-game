'use strict';

/**
 * @ngdoc function
 * @name memoryGameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the memoryGameApp
 */
angular.module('memoryGameApp')
	.controller('MainCtrl', [function() {
		var self = this;
		self.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		self.generate = function() {
			console.log('Demo');
		};
	}]);