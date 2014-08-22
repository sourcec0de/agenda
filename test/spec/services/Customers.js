'use strict';

describe('Service: Customers', function () {

  // load the service's module
  beforeEach(module('agendaApp'));

  // instantiate service
  var customers;
  beforeEach(inject(function (_customers_) {
    customers = _customers_;
  }));

  it('should do something', function () {
    expect(!!customers).toBe(true);
  });

});
