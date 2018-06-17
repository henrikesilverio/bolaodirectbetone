'use strict';

/**
 * @ngdoc function
 * @name app.controller:CoreCtrl
 * @description
 * # CoreCtrl
 * Controller of app
 */

angular.module('app')
    .controller('CoreCtrl', coreCtrl);

function coreCtrl($scope, $state) {
    $scope.menuItems = [];
    angular.forEach($state.get(), function (item) {
        if (item.data && item.data.visible) {
            $scope.menuItems.push({ name: item.name, text: item.data.text, icon: item.data.icon });
        }
    });
}