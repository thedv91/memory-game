'use strict';

describe('Service: GameFactory', function () {

  // load the service's module
  beforeEach(module('memoryGameApp'));

  // instantiate service
  var GameFactory;
  beforeEach(inject(function (_GameFactory_) {
    GameFactory = _GameFactory_;
  }));

  it('should do something', function () {
    expect(!!GameFactory).toBe(true);
  });

});
