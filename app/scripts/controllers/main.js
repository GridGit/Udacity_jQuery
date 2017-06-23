'use strict';

/**
 * @ngdoc function
 * @name udacityJqueryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the udacityJqueryApp
 */
angular.module('udacityJqueryApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
