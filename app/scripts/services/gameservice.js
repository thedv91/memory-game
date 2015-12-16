'use strict';

/**
 * @ngdoc service
 * @name memoryGameApp.GameService
 * @description
 * # GameService
 * Service in the memoryGameApp.
 */
angular.module('memoryGameApp')
	.service('GameService', [function() {
		return {
			generate: function(rows, columns) {
				var matches = (rows * columns) / 2;
				var memory = [];
				var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];
				var items = letters;

				/*
				Generate array
				 */
				for (var n = 0; n < Math.floor(matches); n++) {
					// Get random item
					var randLetter = Math.floor((Math.random() * items.length));
					var letter = items[randLetter];
					memory.push(letter);
					items.splice(randLetter, 1);
				}
				memory = _.shuffle(memory.concat(memory));
				return memory;
			}
		};
	}]);