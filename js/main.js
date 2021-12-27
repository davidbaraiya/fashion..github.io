
// preloader

$(window).on('load', function(){ 
  $('#status').fadeOut(); 
  $('#preloader').delay(350).fadeOut('slow'); 
  $('body').delay(350).css({'overflow':'visible'});
})

// menubar 
$('#menu-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('#navbar').toggleClass('active-navbar');
});

$('.links a').click(function(){
    $('#navbar').removeClass('active-navbar');
    $('#menu-bars').removeClass('fa-times');
});

// $(window).on('scroll', function(){
//     $('#navbar').removeClass('active-navbar');
//     $('#menu-bars').removeClass('fa-times');
// });

  // men slide
  var swiper = new Swiper(".men-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: ".men-prev",
        prevEl: ".men-next",
    },
    breakpoints: {
        500: {
            slidesPerView: 2,
        },
    },
});

// women 
var swiper = new Swiper(".women-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: true,

    navigation: {
        nextEl: ".women-prev",
        prevEl: ".women-next",
    },

    breakpoints: {
        500: {
            slidesPerView: 2,
        },
    },
});
