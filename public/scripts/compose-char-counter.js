$(document).ready(function(){
  $('textarea').keyup(function(){
    var userInput = $(this).val().length;
    var charLimit = 140 - userInput;
    $('.counter').html(charLimit);
    if(charLimit >= 0){
      $('.counter').css('color','black');
    } else {
      $('.counter').css('color','red');
    }
  });
});