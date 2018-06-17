'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */

angular.module('app', [
    'ui.router',
    'ui.router.state.events',
    'ngMessages'
])
.config(config);

var states = [
    {
        name: 'base',
        state: {
            abstract: true,
            templateUrl: 'base.html',
            controller: 'CoreCtrl',
            data: { visibleInMenu: false }
        }
    },
    {
        name: 'login',
        state: {
            url: '/login',
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl',
            data: { visibleInMenu: false }
        }
    }
];

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/paginainicial');
    
    angular.forEach(states, function (state) {
        $stateProvider.state(state.name, state.state);
    });
}