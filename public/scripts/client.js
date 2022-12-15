/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
  const database = [
    {
      "user": {
        "name": "Cristiano Ronaldo",
        "avatars": "./images/cristiano-ronaldo-portuguese-professional-footballer-who-plays-as-forward-club-manchester-united-portugal-national-260687672.jpeg",
        "handle": "@CristianoRonaldo" },
      "content": {
        "text": "I don't mind people hating me, because it pushes me"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Roger Federer",
        "avatars": "./images/roger-federer.jpeg",
        "handle": "@RogerFederer" },
      "content": {
        "text": "I'm a very positive thinker, and I think that is what helps me the most in difficult moments. I have learnt to be even more patient. When you do something best in life, you don't really want to give that up - and for me it's tennis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    }
  ] 
  
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
      <p>${tweetObj['created_at']}</p>
      <div>
        <i class="fa-solid fa-flag state"></i>
        <i class="fa-solid fa-retweet state"></i>
        <i class="fa-solid fa-heart state"></i>
      </div>
    </footer>
  </article>`)
  return $tweet
   };

   const renderTweets = function(tweets) {
    $('#adds-tweets').empty()
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#adds-tweets').append($tweet);
    }
  };

  $('form').submit(function(event) {
    event.preventDefault(event);
    console.log($('form'))
    
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: $('form').serialize()
    })

  })
  

   renderTweets(database);

  });
 


 