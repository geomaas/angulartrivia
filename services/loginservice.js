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
