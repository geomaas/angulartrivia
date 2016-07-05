(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let jeopardy = angular.module('JeopardyApp', []);

// Controllers
require('./questionpull')(jeopardy);

},{"./questionpull":2}],2:[function(require,module,exports){

module.exports = function(jeopardy) {
    jeopardy.controller('JeopardyController', function($scope, $http) {
        $scope.previousquestion = [

        ];
        $scope.answered = [

        ];

        $scope.questiongroup = {
            category: "geoff's mistakes",
            answer: '',
            question: 'I had too many of these, this past weekend...',
            value: 0,
            useranswer:"",
        };
        $scope.AnswerCheck = function() {
          console.log("click is working");
          
        };
        $scope.AnswerCheck();
        // Make an AJAX request and update the scope.
        $scope.NewQuestion = function() {
            $http({
                method: 'GET',
                url: 'http://jservice.io/api/random',
            }).then(function(response) {
                let question = response.data[0];
                // console.log(question);
                console.log("NewQuestion click working");
                $scope.questiongroup.question = question.question;
                $scope.questiongroup.value = question.value;
                $scope.questiongroup.category = question.category.title;
                // $scope.questiongroup.answer = question.answer;

                $scope.previousquestion.push({question: question.question, value: question.value, answer: question.answer});
            });
        };
        $scope.NewQuestion();

    })
};

},{}]},{},[1])