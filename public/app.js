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
      $scope.players = LoginService.getPlayerArr();
      $scope.catOne = QuestionService.getOneArr();
      $scope.catTwo = QuestionService.getTwoArr();
      $scope.catThree = QuestionService.getThreeArr();
      $scope.catFour = QuestionService.getFourArr();
      $scope.catFive = QuestionService.getFiveArr();

      console.log("test", $scope.players);
      console.log($scope.catThree);
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
      let categoryOneArr = [];
      let categoryTwoArr = [];
      let categoryThreeArr = [];
      let categoryFourArr = [];
      let categoryFiveArr = [];

      let oldQs = [];
        $http({
            method: 'GET',
            url: 'http://jservice.io/api/clues',
        }).then(function(response) {
          // console.log(response);
            let category = response.data;
            // console.log(category);
            /////////////// add math.random function for category ids math.ceil(math.random() * 4)
            categoryOne = category.filter(function (el) {
              return el.category_id === Math.ceil(Math.random() * 4) && el.value !== null;
            });

            categoryTwo = category.filter(function (el) {
              return el.category_id === 7 && el.value !== null;
            });

            categoryThree = category.filter(function (el) {
              return el.category_id === 3 && el.value !== null;
            });

            categoryFour = category.filter(function (el) {
              return el.category_id === 4 && el.value !== null;
            });

            categoryFive = category.filter(function (el) {
              return el.category_id === 11 && el.value !== null;
            });
            // console.log(categoryOne);
            angular.copy(categoryOne, categoryOneArr);
            angular.copy(categoryTwo, categoryTwoArr);
            angular.copy(categoryThree, categoryThreeArr);
            angular.copy(categoryFour, categoryFourArr);
            angular.copy(categoryFive, categoryFiveArr);

            console.log(categoryOneArr,categoryFiveArr,categoryTwoArr,categoryThreeArr,categoryFourArr);

            return 0;
        });
        return {
          getOneArr: function() {
            return categoryOneArr;
          },
          getTwoArr: function() {
            return categoryTwoArr;
          },
          getThreeArr: function() {
            return categoryThreeArr;
          },
          getFourArr: function() {
            return categoryFourArr;
          },
          getFiveArr: function() {
            return categoryFiveArr;
          },
        }
    });
};





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

},{}]},{},[4])