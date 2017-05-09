window.onload = function () {

  var letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var guesses = [];
  var movesLeft;
  var guess;

  var wordBank = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  var word = wordBank[Math.floor(Math.random() * wordBank.length)];

//create letter buttons
  for(var i = 0; i < letterArray.length; i++)
  {
    $('#letterChoices').html("<div>");
      for(var j = 0; j < letterArray[i].length; j++)
      {
        $('#letterChoices').html("<input type='button' value='" + letterArray[i][j] + "'/>");
      }
      $('#letterChoices').html("</div>");
  }

//show word spaces
  $('#startButton').on('click', function() {
    var placeHolders = [];
    for (var i = 0; i < word.length; i++) {
      placeHolders[i] = "_ ";
    };
    $('#spaces').html(placeHolders);
  });
}


