$(document).ready(function() {
  // --- our code goes here ---
  console.log("Hello")

  $("#tweet-text").on("keyup", function() {
    const userInput = $("#tweet-text").val();
    const remaining = 140 - userInput.length;
    $('.counter').html(remaining);
    if (userInput.length > 140) {
      $('.counter').css('color', 'red')
    } else {
      $('.counter').css('color', '#545149')
    }
  })
});


/* blur - registers when a field is exitedd */

/* keydown - whenever a key is pressed */

/* keyup - whenever a key is released */

/* change - whenever a change is registered */

/* keypress - when a character is pressed */ 

/* input - */ 