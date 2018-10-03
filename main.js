"use strict";

/*   Tjejer Kodar
     Help me choose
     index.html
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
});

//Vid klick på rubriken byts bakgrundsfärgen
//Klura mer på denna senare
/*$(function(){
    $('.clickhere').click(function() {
        $('.bgSection').css('background-color', 'yellow');
    });
}); */
