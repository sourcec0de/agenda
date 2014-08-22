'use strict';

/**
 * @ngdoc function
 * @name agendaApp.controller:CustomersCtrl
 * @description
 * # CustomersCtrl
 * Controller of the agendaApp
 */
angular.module('agendaApp')
  .controller('CustomersCtrl', function ($scope, Customers) {
    Customers.query(function(){
        //
    });
  });
