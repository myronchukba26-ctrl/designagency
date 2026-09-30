const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
//   loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

  
});

const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');


menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu__open');
})