
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
