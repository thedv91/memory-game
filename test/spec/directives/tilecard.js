'use strict';

describe('Directive: tileCard', function () {

  // load the directive's module
  beforeEach(module('memoryGameApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tile-card></tile-card>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tileCard directive');
  }));
});
