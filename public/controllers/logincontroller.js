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
