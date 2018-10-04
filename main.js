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

//Vid klick på rubriken byts färgen
//Klura mer på denna senare
/*
$(".clickhere").click(function() {
  $(this).toggleClass("color");
});
*/

/*BONUS
När resultatet visas, byt ut rubriken från "Help me choose between.."
till "The winner is:"
Använd en if-sats för att se till att en input-text bara läggs till
options-listan om det finns någon text i det, dvs om värdet inte
är "" (tom sträng)
