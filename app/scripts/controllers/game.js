'use strict';

/**
 * @ngdoc function
 * @name memoryGameApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the memoryGameApp
 */
angular.module('memoryGameApp')
	.controller('GameCtrl', ['$timeout', '$interval', 'GameFactory', 'SoundFactory', function($timeout, $interval, GameFactory, SoundFactory) {
		var self = this;
		var currentSessionOpen = false;
		var previousCard = null;
		var numPairs = 0;
		var timer = null;
		var interval = null;
		self.totalTime = 0;
		self.totalMove = 0;
		self.isGuarding = true;
		self.inGame = false;
		self.complete = false;
		self.hasNewGame = false;

		self.grid = {};
		self.grid.rows = 4;
		self.grid.cols = 4;
		self.deck = [];



		/**
		 * Init new game
		 */
		self.newGame = function() {
			self.stopTimer();
			self.resetGame();
			self.totalTime = 0;
			self.deck = GameFactory.newGame(self.grid.rows, self.grid.cols);
			self.isGuarding = true;
			self.inGame = false;
		};

		/**
		 * Start game
		 */
		self.start = function() {
			self.isGuarding = false;
			self.inGame = true;

			interval = $interval(function() {
				self.totalTime++;
			}, 1000);

		};

		/**
		 * Check section on click
		 * @param  Object card
		 * @return void
		 */
		self.check = function(card) {
			if (card.isLock || card.isFaceUp) {
				console.log('return');
				return;
			}
			SoundFactory.flip().play();
			if (currentSessionOpen && previousCard !== card && previousCard.item === card.item && !card.isFaceUp) {

				//Prevoius card match current card								
				card.isFaceUp = true;
				card.isLock = previousCard.isLock = true;
				previousCard = null;
				currentSessionOpen = false;
				numPairs++;
				self.totalMove++;
			} else if (currentSessionOpen && previousCard !== card && previousCard.item !== card.item && !card.isFaceUp) {

				//Previous card not match current card				
				self.isGuarding = true;
				card.isFaceUp = true;
				currentSessionOpen = false;
				self.totalMove++;
				$timeout(function() {
					previousCard.isFaceUp = card.isFaceUp = false;
					previousCard = null;
					self.isGuarding = false;
				}, 1000);
			} else {

				//Current card start open				
				card.isFaceUp = true;
				currentSessionOpen = true;
				previousCard = card;
			}

			/**
			 * End game
			 */
			if (numPairs === Math.floor(self.deck.length / 2)) {
				self.complete = true;
				self.stopTimer();
			}
		};

		/**
		 * Stop count time
		 * @return void
		 */
		self.stopTimer = function() {
			$interval.cancel(interval);
		};

		/**
		 * Reset Game
		 * @return void
		 */
		self.resetGame = function() {
			self.hasNewGame = true;
			self.complete = false;
			self.totalMove = 0;
			currentSessionOpen = false;
			previousCard = null;
			numPairs = 0;
			timer = null;
			self.totalTime = 0;
			self.isGuarding = true;
			self.inGame = false;
		};


	}]);