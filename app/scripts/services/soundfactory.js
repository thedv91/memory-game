'use strict';

/**
 * @ngdoc service
 * @name memoryGameApp.SoundFactory
 * @description
 * # SoundFactory
 * Factory in the memoryGameApp.
 */
angular.module('memoryGameApp')
    .factory('SoundFactory', [function() {
        // Service logic

        // Public API here
        return {
            flip: function() {
                return new Audio('media/flip.mp3');
            }
        };
    }]);