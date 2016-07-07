
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
            categoryOne = category.filter(function (el) {
              return el.category_id === 1;
            });

            categoryTwo = category.filter(function (el) {
              return el.category_id === 7;
            });

            categoryThree = category.filter(function (el) {
              return el.category_id === 3;
            });

            categoryFour = category.filter(function (el) {
              return el.category_id === 4;
            });

            categoryFive = category.filter(function (el) {
              return el.category_id === 11;
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
