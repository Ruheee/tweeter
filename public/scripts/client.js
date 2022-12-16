/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
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

  const loadTweets = () => {
    $.ajax({
      url: "/tweets",
      method: "GET",
    })
    .then(data => {
      renderTweets(data);
    })
}

  $('form').submit(function(event) {
    event.preventDefault(event);
    if ($('#tweet-text').val().length === 0) {
      alert("Nothing typed")
    } else {
      if ($('#tweet-text').val().length <= 140) {
        $.ajax({
          url: "/tweets",
          method: "POST",
          data: $('form').serialize()
        })
        .then(loadTweets)
        .then($('#tweet-text').val(''))
      }
      
    }
  });

  loadTweets();
});
 


 