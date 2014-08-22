'use strict';

/**
 * @ngdoc overview
 * @name agendaApp
 * @description
 * # agendaApp
 *
 * Main module of the application.
 */
angular
  .module('agendaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/customers', {
        templateUrl: 'views/customers.html',
        controller: 'CustomersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
