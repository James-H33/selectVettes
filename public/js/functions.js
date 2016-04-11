$(document).ready(function() {

  $('.nav-icon').on('click', function() {
    $('.nav-icon span').toggleClass('open');
    $('.nav-wrapper').toggleClass('nav-slide');
    $('.nav-icon').toggleClass('icon-slide');
  })

})
