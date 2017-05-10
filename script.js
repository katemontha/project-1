window.onload = function () {

  var letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var moves = 10;
  var guess;
  var placeHolders = [];

  var wordBank = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  var word = wordBank[Math.floor(Math.random() * wordBank.length)];

//start game
  $('#startButton').one('click', function() {
    //replace letters in word with place holders
    for (var i = 0; i < word.length; i++) {
      placeHolders[i] = "_";
    };
    $('#spaces').html(placeHolders);
    //displays moves left
    $('.movesLeft').html(moves)

    //create letter buttons
    for(var i = 0; i < letterArray.length; i++) {
      $('.letterChoices').append("<button>" + letterArray[i] + "</button>");
    }
    return placeHolders;
  });

//onclick function
  $(".letterChoices").click(function(event) {
    //create variable for clicked letter
    guess = event.target.innerHTML;
    //check if word contains clicked letter
    if (word.indexOf(guess) > -1) {
      console.log("found");
      //replace place holder with clicked letter if correct
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          placeHolders[i] = guess;
        }
      }
      $('#spaces').html(placeHolders);
    } else { //subtract 1 from moves left
      console.log('not found');
      moves--;
      $('.movesLeft').html(moves);
      }
    //if user runs out of moves alert game over
    if (moves === 0) {
      alert("You'll get it next time... (Refresh to play again.)");
      $('#spaces').html(word);
    }
    //if user guesses word alert congrats
    if (placeHolders.join("") == word) {
      alert("How'd you know?! (Refresh to play again.)")
    }
  });
}

