let jeopardy = angular.module('JeopardyApp', ['ngRoute']);

// Controllers
// require('./questionpull')(jeopardy);
require('./controllers/logincontroller')(jeopardy);
require('./controllers/questioncontroller')(jeopardy);
require('./controllers/overcontroller')(jeopardy);

// Services
require('./services/questionservice')(jeopardy);
require('./services/loginservice')(jeopardy);


jeopardy.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/login',
        })
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'templates/login.html',
        })
        .when('/game', {
            controller: 'GameController',
            templateUrl: 'templates/game.html',
        })
        .when('/over', {
            controller: 'OverController',
            templateUrl: 'templates/over.html',
        })
        .otherwise({
            templateUrl: 'templates/oops.html',
        });
}]);
