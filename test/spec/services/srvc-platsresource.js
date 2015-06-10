'use strict';

describe('Service: srvcPlatsResource', function () {

  // load the service's module
  beforeEach(module('eMenuApp'));

  // instantiate service
  var srvcPlatsResource;
  beforeEach(inject(function (_srvcPlatsResource_) {
    srvcPlatsResource = _srvcPlatsResource_;
  }));

  it('should do something', function () {
    expect(!!srvcPlatsResource).toBe(true);
  });

});
