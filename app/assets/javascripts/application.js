/* global $ */
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
var validatorGenerator = function (validator) {
  var selector = $(validator.selector);
  selector.on('keydown', function () {
    var $errorField = selector.parent().find('.errors');
    if (selector.val().length > validator.maxLength) {
      selector.addClass('field-with-errors');
      $errorField.html(validator.message);
    } else {
      selector.removeClass('field-with-errors')
                .addClass('correct-field');
      $errorField.html('');
    }
  });
};
//Client side validation
var tweetMessageValidator = {
  selector: '#tweet_message',
  maxLength: 140,
  message: 'Post Title must be a max of 15 characters'
};
validatorGenerator(tweetMessageValidator);
