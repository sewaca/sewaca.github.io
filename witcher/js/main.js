$(document).ready(function(){

  $('.mobile-menu-button').on('click', function(){
    $('.menu-button').toggleClass('active');
    $('.mobile-menu').toggleClass('visiable');
    setTimeout(function(){
      $('.mobile-menu').css('opacity', '1');
    },1);
  });

  $('.see-button-wrapper').on('click','button' ,function(){
    if(window.innerWidth >= 2240 && window.innerHeight >= 1260){
      $('.trailer-content').css('width', '2240px');
      $('.trailer-content').css('height', '1260px');
    }
    else if(window.innerWidth >= 1120 && window.innerHeight >= 630){
      $('.trailer-content').css('width', '1120px');
      $('.trailer-content').css('height', '630px');
    }
    else if(window.innerWidth >= 560 && window.innerHeight >= 315){
      $('.trailer-content').css('width', '560px');
      $('.trailer-content').css('height', '315px');
    }
    else{
      $('.trailer-content').css('width', '280px');
      $('.trailer-content').css('height', '157px');
    }
    $('.trailer').css('display', 'block')
  });
  $('.close-trailer-button').on('click', function(){
    $('.trailer').css('display', 'none')
  });

  var slider = new Swiper(".slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".button-next",
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        slidesOffsetAfter: 50,
      },
    },
  });
});