(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let jeopardy = angular.module('JeopardyApp', []);

// Controllers
require('./questionpull')(jeopardy);


// test test

},{"./questionpull":2}],2:[function(require,module,exports){

module.exports = function(jeopardy) {
    jeopardy.controller('JeopardyController', function($scope, $http) {
        $scope.previousquestion = [

        ];

        $scope.questiongroup = {
            category: "geoff's mistakes",
            answer: '',
            question: 'I had too many of these, this past weekend...',
            value: 0,
            useranswer:"",
            score: 0,
        };

        $scope.AnswerCheck = function() {
          console.log($scope.questiongroup.score);
          console.log($scope.playerAnswer);
          let currentQuestion = $scope.previousquestion[$scope.previousquestion.length - 1];
          currentQuestion.useranswer = $scope.playerAnswer;
          console.log($scope.previousquestion);
          $scope.playerAnswer = null;
          if (currentQuestion.useranswer === currentQuestion.answer.toLowerCase()) {
            console.log(true);
            // console.log(currentQuestion.userscore);
            // console.log(currentQuestion.value);
            // console.log(currentQuestion.userscore += currentQuestion.value);
            $scope.questiongroup.score += currentQuestion.value;
            console.log($scope.questiongroup.score);
            return true;
          }else {
            console.log(false);
            $scope.questiongroup.score -= currentQuestion.value;
          }
        };
        // Make an AJAX request and update the scope.
        $scope.NewQuestion = function() {
            $http({
                method: 'GET',
                url: 'http://jservice.io/api/random',
            }).then(function(response) {
                let question = response.data[0];
                console.log(question);
                // console.log("NewQuestion click working");
                $scope.questiongroup.question = question.question;
                $scope.questiongroup.value = question.value;
                $scope.questiongroup.category = question.category.title;
                // $scope.questiongroup.answer = question.answer;
                $scope.previousquestion.push({question: question.question, value: question.value, answer: question.answer, userscore: 0});
                // $scope.playerAnswer.val('');
            });
        };
        $scope.NewQuestion();

    })
};

},{}]},{},[1])