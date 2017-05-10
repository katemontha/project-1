window.onload = function () {

  var letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var guesses = [];
  var movesLeft;
  var guess;

  var wordBank = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  var word = wordBank[Math.floor(Math.random() * wordBank.length)];

//start game
  $('#startButton').one('click', function() {
    //show place holders
    var placeHolders = [];
    for (var i = 0; i < word.length; i++) {
      placeHolders[i] = "_ ";
    };
    $('#spaces').html(placeHolders);

    //create letter buttons
    for(var i = 0; i < letterArray.length; i++) {
      $('.letterChoices').append("<button id = '" + letterArray[i] + "'>" + letterArray[i] + "</button>");
    }
  });

 //assign
 $("button").click(function() {
      var guess = ($(this).text());
      return guess;
  });

 console.log(guess)
}


