let swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    // when window width is >= 425px
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 425px
    427: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 980px
    980: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
