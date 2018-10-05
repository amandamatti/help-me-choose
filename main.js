"use strict";

/*   Tjejer Kodar
     Help me choose
     main.js
     Amanda Matti, 2018 */

// Göm resultSection när sidan laddas
$(function() {
  $('.resultSection').hide()

  // Lägg till input-element
  var add_option = function() {
    $('.inputs').append('<input></input>')
  }

  //Vid klick -> kör add_option
  $('.addOption').click(add_option)

  var options = [];
  var submit = function() {
    $('.inputSection').hide()
    $('.resultSection').css('display', 'flex')
    $('input').each(function() {
      options.push($(this).val())
    });
    var winner = options[Math.floor(Math.random() * options.length)]
    console.log(winner);
    $('.resultSection').text(winner)
  }
  $('.go').click(submit);
});
