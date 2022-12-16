$(document).ready(function() {

  // Counts the characters used and if over the limit shows characters in red
  $("#tweet-text").on("keyup", function() {
    const userInput = $("#tweet-text").val();
    const remainingCharacters = 140 - userInput.length;
    $('.counter').html(remainingCharacters);
    if (userInput.length > 140) {
      $('.counter').css('color', 'red');
      alert("Text too long")
    } else {
      $('.counter').css('color', '#545149');
    }
  });
});