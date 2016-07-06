(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(jeopardy) {
    jeopardy.controller('LoginController', ['$scope', 'LoginService', '$location', function($scope, LoginService, $location) {
        $scope.players = LoginService.getPlayerArr();
        $scope.password = LoginService.getPassword();

        $scope.submit = function() {
            console.log("clicked");
            console.log($scope.players);
            LoginService.addToPlayerArr({name:$scope.playerOneName, score: 0});
            LoginService.addToPlayerArr({name:$scope.playerTwoName, score: 0});
            LoginService.addToPlayerArr({name:$scope.playerThreeName, score: 0});
            console.log($scope.players);
            console.log($scope.password);
            console.log($scope.enteredPassword);
            if ($scope.enteredPassword === $scope.password.toLowerCase()) {
              console.log(true);
              $location.path('/game');

            }else {
              console.log(false);
            }

        };
    }]);
};

},{}],2:[function(require,module,exports){
module.exports = function(jeopardy) {
    jeopardy.controller('OverController', ['$scope','LoginService',function($scope, LoginService) {

    }]);
  };

},{}],3:[function(require,module,exports){
module.exports = function(jeopardy) {
    jeopardy.controller('GameController', ['$scope','QuestionService', 'LoginService', function($scope, QuestionService, LoginService) {

    }]);
  };

},{}],4:[function(require,module,exports){
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

},{"./controllers/logincontroller":1,"./controllers/overcontroller":2,"./controllers/questioncontroller":3,"./services/loginservice":5,"./services/questionservice":6}],5:[function(require,module,exports){
module.exports = function(jeopardy) {
    jeopardy.factory('LoginService', function() {
      let playerArr = [
        // {playerOneName: "player one", playerOneScore: 0},
        // {playerTwoName: "player two", playerTwoScore: 0},
        // {playerThreeName: "player three", playerThreeScore: 0},
      ];
      let loginPassword = "TREBEK";
      console.log(playerArr);

      return {
        addToPlayerArr: function(player) {
          playerArr.push(player);
        },
        getPlayerArr: function() {
          return playerArr;
        },
        getPassword: function(){
          return loginPassword;
        }

      };
    });

  };

},{}],6:[function(require,module,exports){

module.exports = function(jeopardy) {
    jeopardy.factory('QuestionService', function($http) {
      let newQs = [];
      let oldQs = [];
        $http({
            method: 'GET',
            url: 'http://jservice.io/api/categories?count=10',
        }).then(function(response) {
          console.log(response);
            let question = response.data[0];
            console.log(question);
            // // console.log("NewQuestion click working");
            // $scope.questiongroup.question = question.question;
            // $scope.questiongroup.value = question.value;
            // $scope.questiongroup.category = question.category.title;
            // // $scope.questiongroup.answer = question.answer;
            // $scope.previousquestion.push({
            //     question: question.question,
            //     value: question.value,
            //     answer: question.answer,
            //     userscore: 0
            // });
            // $scope.playerAnswer.val('');
            return question;
        });
        return newQs;
    });
};

},{}]},{},[4])