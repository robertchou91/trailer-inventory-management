$('.navbar-nav li a').on('click', function() {
    $(this).parent().parent().find('.active').removeClass('active');
    $(this).parent().addClass('active');
});

$('.list').on('click', function() {
  $(this).parent().find('.active').removeClass('active');
  $('.list').addClass('active');
});




$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#scroll').fadeIn();
      } else {
        $('#scroll').fadeOut();
      }
    });
    $('#scroll').click(function() {
      $("html, body").animate({
        scrollTop: 0
      }, 600);
      return false;
    });
  });