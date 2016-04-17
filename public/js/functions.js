$(document).ready(function() {

  $('.nav-icon').on('click', function() {
    $('.nav-icon span').toggleClass('open');
    $('.nav-wrapper').toggleClass('nav-slide');
    $('.nav-icon').toggleClass('icon-slide');
    $('.nav-display').toggleClass('nav-display-active');
  })

  //Check to see if the window is top if not then display button
  $(window).scroll(function(){

    // Var for calculating window distance from top
    var scrollCheck = $(window).scrollTop();

    if ($(this).scrollTop() > 300) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }

    // Scroll Index headings
    $('.index-intro-display').css({
      'transform' : 'translateY(0' + scrollCheck * 0.5 + 'px)'
    })

    });

  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},1000);
    return false;
  });

})
