'use strict';

describe('Controller: CtrlPlatsCtrl', function () {

  // load the controller's module
  beforeEach(module('eMenuApp'));

  var CtrlPlatsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CtrlPlatsCtrl = $controller('CtrlPlatsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
