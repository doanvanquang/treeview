'use strict';

/**
 * @ngdoc function
 * @name appstructureApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appstructureApp
 */
angular.module('appstructureApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
