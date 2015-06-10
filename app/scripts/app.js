'use strict';

/**
 * @ngdoc overview
 * @name eMenuApp
 * @description
 * # eMenuApp
 *
 * Main module of the application.
 */
var eMenuModule = angular
  .module('eMenuApp', [
    'eMenuApp.services',
    'eMenuApp.controllers',
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
        templateUrl: 'views/plats.html',
        controller: 'platsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
