
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
