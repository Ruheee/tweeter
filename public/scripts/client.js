/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
  // cretes element in HTML
   const createTweetElement = (tweetObj) => {
    const $tweet = $(`<article class="tweet-container">
    <header class="img-tweet-container">
      <div class="user-info">
        <div class="avatar-name">
          <img src="${tweetObj['user'].avatars}" alt="">
          <p>${tweetObj['user'].name}</p>
        </div>
        <p class="state">${tweetObj['user'].handle}</p>
      </div>
        <p class="tweet">${tweetObj['content'].text}</p>
    </header>
    <footer class="time-retweet">
      <p>${timeago.format(tweetObj["created_at"])}</p>
      <div>
        <i class="fa-solid fa-flag state"></i>
        <i class="fa-solid fa-retweet state"></i>
        <i class="fa-solid fa-heart state"></i>
      </div>
    </footer>
  </article>`)
  return $tweet
   };
   // orders tweets from newest to oldest then uses createTweeet as a callback then renders that tweet on the page
   const renderTweets = (tweets) => {
    $('#adds-tweets').empty()
    tweets = tweets.sort((a, b) => {
      return b.created_at - a.created_at
    })
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#adds-tweets').append($tweet);
    }
  };

  // function that does an AJAX GET request from /tweets route then renders the data (tweet)
  const loadTweets = () => {
    $.ajax({
      url: "/tweets",
      method: "GET",
    })
    .then(data => {
      renderTweets(data);
    })
}
  // looks for a form and once the event submit has been activated, it runs the following function
  $('form').submit(function(event) {
    event.preventDefault(event);
    // checks if the text area is empty
    if ($('#tweet-text').val().length === 0) {
      $('.error-msg').slideDown(600).text(`⚠️ Cant submit empty field`)
    } else {
      // if the character counter is = to or < than 140 the tweet will post, then load the posted tweet, then empty the textarea
      if ($('#tweet-text').val().length <= 140) {
        $('.error-msg').slideUp(600)
        $.ajax({
          url: "/tweets",
          method: "POST",
          data: $('form').serialize()
        })
        .then(loadTweets)
        .then($('#tweet-text').val(''))
        .then($('.button-counter').parent().find('.counter').text('140'))
      }
    }
  });

  loadTweets();
});
 


 