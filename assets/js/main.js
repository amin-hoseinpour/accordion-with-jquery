$(function(){
    $('.acordion > li > div').click(function(){
      if($(this).next().is(':hidden'))
         $('.acordion ul').slideUp();

      $(this).next().slideToggle();
    });
   
    $('.acordion ul').eq(0).show();
});














