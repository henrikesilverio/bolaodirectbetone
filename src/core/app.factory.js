'use strict';

/**
 * @ngdoc overview
 * @name app.factory
 * @description
 * # app
 *
 * Main factory of the application.
 */

app.factory('authInterceptor', authInterceptor);

function authInterceptor($localStorage, $sessionStorage) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            var currentUser = $localStorage.currentUser || $sessionStorage.currentUser;
            if (currentUser) {
                config.headers['Authorization'] = 'Bearer ' + currentUser.token;
            }
            return config;
        }
    }
}