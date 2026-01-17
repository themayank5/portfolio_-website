
(function ($) {

  "use strict";

  // PRE LOADER
  $(document).ready(function () {
    $('.preloader').fadeOut(500); // reduced duration for snappier feel    
  });

  // CUSTOM LINK
  $('.custom-link').click(function () {
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $('body,html').animate({
        scrollTop: totalScroll
      }, 300);
    }
  });

})(window.jQuery);


