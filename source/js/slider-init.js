'use strict';

(function () {
  var laptopWidth = 1024;
  var tabletWidth = 768;
  var documentWidth = document.body.clientWidth;

  if (documentWidth >= laptopWidth) {
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 4,
      coverflowEffect: {
        rotate: 0,
        stretch: 190,
        depth: 150,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else if ((documentWidth >= tabletWidth) && (documentWidth < laptopWidth)) {
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 4,
      coverflowEffect: {
        rotate: 0,
        stretch: 131,
        depth: 150,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else if (documentWidth < tabletWidth) {
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 4,
      coverflowEffect: {
        rotate: 0,
        stretch: 63,
        depth: 190,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  window.addEventListener('resize', onSliderResize);

  function onSliderResize() {
    documentWidth = document.body.clientWidth;

    if (documentWidth >= laptopWidth) {
      swiper.params.coverflowEffect.stretch = 190;
      swiper.params.coverflowEffect.depth = 150;
    } else if ((documentWidth >= tabletWidth) && (documentWidth < laptopWidth)) {
      swiper.params.coverflowEffect.stretch = 131;
      swiper.params.coverflowEffect.depth = 150;
    } else if (documentWidth < tabletWidth) {
      swiper.params.coverflowEffect.stretch = 63;
      swiper.params.coverflowEffect.depth = 190;
    }

    swiper.update();
  }
})();
