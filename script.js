window.onload = function () {

  //define varaibles
  var letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var moves = 10;
  var guess;
  var placeHolders = [];
  var wordBank = ['FRANK', 'CHARLIE', 'DENNIS', 'SWEETDEE', 'MAC', 'CRICKET', 'WAITRESS', 'RUMHAM', 'MILKSTEAK', 'KITTENMITTENS'];
  var randomIndex;
  var word;

  var randomWord = function () {
    randomIndex = Math.floor(Math.random() * wordBank.length);
     word = wordBank[randomIndex];
  }

  randomWord();

  //replace letters in word with place holders
  for (var i = 0; i < word.length; i++) {
    placeHolders[i] = "_";
  }
  $('.spaces').html(placeHolders);
  //displays initial moves left
  $('.movesLeft').html(moves)
  //create letter buttons
  for(var i = 0; i < letterArray.length; i++) {
    $('.letterList').append("<button class = 'letterButton'>" + letterArray[i] + "</button>");
  }
  //hint button adds hint
  $('.hintButton').one('click', function() {
    $('.hint').html("Hint: Welcome to Paddy's Pub")
  });

  //onclick function
  $(".letterList").click(function(event) {
    //assign variable to clicked letter
    guess = event.target.innerHTML;
    //fade and disable button after click
    if (guess.length === 1) {
      $(event.target).attr({
        id: "clicked",
        disabled: true
      });
    }
    //check if word contains clicked letter
    if (word.indexOf(guess) > -1) {
      //replace place holder with clicked letter if correct
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          placeHolders[i] = guess;
        }
      }
      $('.spaces').html(placeHolders);
    } else {
        //subtract 1 from moves left
        if (guess.length === 1 && moves > 0) {
            moves--;
            $('.movesLeft').html(moves);
        }
      }
    //if user runs out of moves alert game over
    if (moves === 0) {
      alert("You'll get it next time... (Refresh to play again.)");
      $('.spaces').html(word);
    }
    //if user guesses word alert congrats
    if (placeHolders.join("") == word) {
      alert("How'd you know?! (Refresh to play again.)")
    }
  });

  //reload page for new word
  $('.resetButton').on('click', function() {
    location.reload();
  });
}

