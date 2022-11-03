// const swiper = new Swiper('.swiper', {
//   slidesPerView: "auto",
//   spaceBetween: 32,
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1.1,
//     },
//     450: {
//       slidesPerView: 1.5,
//     },
//     680: {
//       slidesPerView: 2,
//     },
//     786: {
//       slidesPerView: 2.5,
//     },
//     1100: {
//       slidesPerView: 3,
//     },
//     1440: {
//       slidesPerView: 3,
//     },
//   }
// });

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 32,
  watchOverflow: false,

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


const swiperGrid = new Swiper(".benefits__wrapper", {
  slidesPerView: "auto",
  // slidesPerGroup: 2,
  spaceBetween: 16,
  breakpoints: {
    1060: {
      enabled: false,
    },
  }
});


