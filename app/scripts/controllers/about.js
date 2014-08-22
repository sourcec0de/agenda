'use strict';

/**
 * @ngdoc function
 * @name agendaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the agendaApp
 */
angular.module('agendaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
