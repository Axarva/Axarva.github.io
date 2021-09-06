//<![CDATA[
    $(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(150).fadeOut('fast'); // will fade out the white DIV that covers the website.
      $('body').delay(100).css({'overflow':'visible'});
    })
//]]>

  !function ($) {
    $(function(){
      window.prettyPrint && prettyPrint()
    })
  }(window.jQuery)
