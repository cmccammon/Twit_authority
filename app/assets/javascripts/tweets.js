// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$('#newTweet').on('click', function () {
  $.ajax({
    url: '/tweets',
    dataType: 'JSON',
    method: "POST",
    data: {
      tweet: {
        message: $('#tweet_message').val(),
      }
    },
    success: function (response) {
      $('#tweet_message').val('');
      $('.field').prepend('<h3>Comment Posted!</h3>');
    }
  });
});
