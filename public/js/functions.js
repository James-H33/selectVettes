$(document).ready(function() {

  $('.nav-icon').on('click', function() {
    $('.nav-icon span').toggleClass('open');
    $('.nav-wrapper').toggleClass('nav-slide');
    $('.nav-icon').toggleClass('icon-slide');
  })

  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
    });

  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},500);
    return false;
  });

})
