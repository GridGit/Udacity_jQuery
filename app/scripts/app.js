'use strict';

/**
 * @ngdoc overview
 * @name udacityJqueryApp
 * @description
 * # udacityJqueryApp
 *
 * Main module of the application.
 */
angular
  .module('udacityJqueryApp', [
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
      .otherwise({
        redirectTo: '/'
      });
  });
