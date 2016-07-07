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
