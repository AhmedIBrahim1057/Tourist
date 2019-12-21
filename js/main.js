$(window).on('scroll',function()
{
    var nav= document.getElementsByTagName('header');

    if( $(window).scrollTop() )
    {
        $(nav).addClass('black');
    }
    else
    {
        $(nav).removeClass('black');
    }
});


$(document).ready(function() {
   
     $( ".card" ).hover(
     function() {
       $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
     }, function() {
       $(this).removeClass('shadow-lg');
     }
   );
     
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(window).on('load',function(){
  $("body").css("overflow","auto");
  $(".preload .d").fadeOut(1000, function(){
      $(".preload").fadeOut(2000);
  });
});