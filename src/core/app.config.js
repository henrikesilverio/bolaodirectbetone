'use strict';

/**
 * @ngdoc overview
 * @name app.config
 * @description
 * # app
 *
 * Main config of the application.
 */

app.config(config);

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