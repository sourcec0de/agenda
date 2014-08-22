'use strict';

/**
 * @ngdoc service
 * @name agendaApp.customers
 * @description
 * # customers
 * Service in the agendaApp.
 */
angular.module('agendaApp')
  .service('Customers', function customers($resource) {
    return $resource('http://localhost:3000/customers');
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
