'use strict';

/**
 * @ngdoc function
 * @name eMenuApp.controller:CtrlPlatsCtrl
 * @description
 * # CtrlPlatsCtrl
 * Controller of the eMenuApp
 */
eMenuControllersModule
  .controller('platsCtrl', ['$scope', 'platsResourceFctry',
    function ($scope, platsResourceFctry) {
      $scope.listPlats = platsResourceFctry.query();
    }
  ]
);
