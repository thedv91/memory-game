'use strict';

/**
 * @ngdoc service
 * @name memoryGameApp.GameFactory
 * @description
 * # GameFactory
 * Factory in the memoryGameApp.
 */
angular.module('memoryGameApp')
      .factory('GameFactory', function() {
            // Service logic
            // ...

            // Public API here
            function generate(rows, cols) {
                  var matches = (rows * cols) / 2;
                  var memory = [];
                  var letters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];
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
                  memory = _.shuffle(_.shuffle(memory.concat(memory)));
                  return memory;
            }
            return {
                  newGame: function(rows, cols) {
                        var key = generate(rows, cols);
                        var memory = [];
                        for (var i = 0; i < key.length; i++) {
                              var card = {};
                              card.isFaceUp = false;
                              card.isLock = false;
                              card.item = key[i];
                              memory.push(card);
                        }
                        return memory;
                  }
            };
      });