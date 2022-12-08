const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 32,
  watchOverflow: false,
  preventClicksPropagation: true,
  watchSlidesProgress: true,
  shortSwipes: false,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    340: {
      slidesPerView: 1.25,
    },
    360: {
      slidesPerView: 1.3,
    },
    375: {
      slidesPerView: 1.35,
    },
    390: {
      slidesPerView: 1.4,
    },
    410: {
      slidesPerView: 1.45,
    },
    420: {
      slidesPerView: 1.5,
    },
    450: {
      slidesPerView: 1.7,
    },
    490: {
      slidesPerView: 1.8,
    },
    530: {
      slidesPerView: 1.9,
    },
    600: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 2.2,
    },
    700: {
      slidesPerView: 2.5,
    },
    850: {
      slidesPerView: 2.8,
    },
    900: {
      slidesPerView: 3,
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


const swiperGrid = new Swiper(".team__slider", {
  slidesPerView: 1.5,
  direction: 'horizontal',
  spaceBetween: 32,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    680: {
      slidesPerView: 1.4,
    },
    900: {
      enabled: false,
      spaceBetween: 0,
    },
  }
});


