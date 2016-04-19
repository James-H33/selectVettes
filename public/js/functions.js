$(document).ready(function() {

  $('.nav-icon').on('click', function() {
    $('.nav-icon span').toggleClass('open');
    $('.nav-wrapper').toggleClass('nav-slide');
    $('.nav-icon').toggleClass('icon-slide');
    $('.nav-display').toggleClass('nav-display-active');
  })


  $(window).scroll(function(){


    // Var for calculating window distance from top
    var scrollCheck = $(window).scrollTop();

    // "this" refers to the window
    if ($(this).scrollTop() > 400) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }



    // Scroll Index headings -- subtle movement down as user scrolls
    $('.index-intro-display h1, .index-intro-display p, .index-intro-emblem').css({
      'transform' : 'translateY(0' + scrollCheck * 0.5 + 'px'
    })

  }); // Document.read ENDS



    //Click event to scroll to top
    $('.scrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},1000);
      return false;
    });


})

// Couldn't figure out how to do this via jquery. So, vanilla js to the rescue!
// Visual counter for the number of cars in the inventory
var span = document.querySelector('.inventory-intro-numbers span');


function inventoryCount() {
  var invNum = 30;

// Adds one and displays that until 30 is reached
  for(var i = 0; i < invNum; i++) {
    setTimeout(function(){
      span.textContent++;
    }, 100 * (i + 1))
  }
}

// 1s after window loads -- This way the user doesn't see start midway through animation.
window.onload = function() {
  setTimeout(function(){
    inventoryCount();
  }, 1000)
}
