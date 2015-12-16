'use strict';

/**
 * @ngdoc function
 * @name memoryGameApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the memoryGameApp
 */
angular.module('memoryGameApp')
	.controller('GameCtrl', ['$timeout', 'GameFactory', function($timeout, GameFactory) {
		var self = this;
		var currentSessionOpen = false;
		var previousCard = null;
		var numPairs = 0;
		self.grid = {};
		self.grid.rows = 8;
		self.grid.cols = 8;


		self.isGuarding = true;
		self.inGame = false;

		self.newGame = function() {
			// I need to fix this redundancy. I initially did not create this
			// game with a start button.
			self.deck = GameFactory.newGame(self.grid.rows, self.grid.cols);
			// set the time of 1 minutes and remove the cards guard
			self.timeLimit = 60000;
			self.isGuarding = false;
			self.inGame = true;

			console.log(self.deck);

			self.startTimer = function() {
				self.timeLimit -= 1000;
				self.isCritical = self.timeLimit <= 10000 ? true : false;

				timer = $timeout(self.startTimer, 1000);
				if (self.timeLimit === 0) {
					self.stopTimer();
					self.isGuarding = true;
				}
			};
		};

		// start the timer as soon as the player presses start		
		self.start = function() {
			// I need to fix this redundancy. I initially did not create this
			// game with a start button.
			self.deck = GameFactory.newGame(self.grid.rows, self.grid.cols);
			// set the time of 1 minutes and remove the cards guard
			self.timeLimit = 60000;
			self.isGuarding = false;
			self.inGame = true;

			console.log(self.deck);

			self.startTimer = function() {
				self.timeLimit -= 1000;
				self.isCritical = self.timeLimit <= 10000 ? true : false;

				timer = $timeout(self.startTimer, 1000);
				if (self.timeLimit === 0) {
					self.stopTimer();
					self.isGuarding = true;
				}
			};
		};

		self.check = function(card) {
			if (card.isLock || card.isFaceUp) {
				console.log('return');
				return;
			}
			if (currentSessionOpen && previousCard !== card && previousCard.item === card.item && !card.isFaceUp) {
				card.isFaceUp = true;
				card.isLock = previousCard.isLock = true;
				previousCard = null;
				currentSessionOpen = false;
				numPairs++;
			} else if (currentSessionOpen && previousCard !== card && previousCard.item !== card.item && !card.isFaceUp) {
				self.isGuarding = true;
				card.isFaceUp = true;
				currentSessionOpen = false;
				$timeout(function() {
					previousCard.isFaceUp = card.isFaceUp = false;
					previousCard = null;
					self.isGuarding = self.timeLimit ? false : true;
				}, 1000);
			} else {
				card.isFaceUp = true;
				currentSessionOpen = true;
				previousCard = card;
			}

			if (numPairs === 8) {
				self.stopTimer();
			}
		}; //end of check()

		// for the timer
		self.timeLimit = 60000;
		self.isCritical = false;

		var timer = null;


		// function to stop the timer
		self.stopTimer = function() {
			$timeout.cancel(timer);
			self.inGame = false;
			previousCard = null;
			currentSessionOpen = false;
			numPairs = 0;
		};


	}]);