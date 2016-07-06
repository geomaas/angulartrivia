
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
