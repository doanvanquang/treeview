'use strict';

/**
 * @ngdoc function
 * @name appstructureApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appstructureApp
 */
angular.module('appstructureApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
