'use strict';

/**
 * @ngdoc function
 * @name agendaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the agendaApp
 */
angular.module('agendaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
