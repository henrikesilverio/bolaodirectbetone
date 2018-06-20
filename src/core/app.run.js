'use strict';

/**
 * @ngdoc overview
 * @name app.run
 * @description
 * # app
 *
 * Main run of the application.
 */

app.run(run);

function run($rootScope, $location, $localStorage, $sessionStorage, jwtHelper) {
    // redirect to login page if not logged in and trying to access a restricted page
    $rootScope.$on('$stateChangeStart', function (event, toState) {
        if (toState.data.authorize) {
            var currentUser = $localStorage.currentUser || $sessionStorage.currentUser;
            if (!currentUser || jwtHelper.isTokenExpired(currentUser.token)) {
                event.preventDefault();
                $rootScope.$evalAsync(function () {
                    $location.path('/login');
                })
            }
        }
    });
}