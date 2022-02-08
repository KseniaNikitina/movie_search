import Swiper from 'swiper';

export default function createSwiper(application) {
  const swiperContainer = document.createElement('div');
  swiperContainer.classList.add('swiper-container');

  const wrapper = document.createElement('div');
  wrapper.classList.add('cards__wrapper');
  wrapper.classList.add('swiper-wrapper');

  const swiperPagination = document.createElement('div');
  swiperPagination.classList.add('swiper-pagination');

  const swiperButtonPrev = document.createElement('div');
  swiperButtonPrev.classList.add('swiper-button-prev');

  const swiperButtonNext = document.createElement('div');
  swiperButtonNext.classList.add('swiper-button-next');

  swiperContainer.append(wrapper, swiperPagination, swiperButtonPrev, swiperButtonNext);
  const mainWrapper = document.querySelector('.main-wrapper');
  mainWrapper.append(swiperContainer);

  const swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      slideChange() {
        if (swiper.isEnd) {
          application.pageCounter += 1;
          application.initSearch(false);
        }
      },
    },
    mousewheel: true,
    keyboard: true,
  });
  return swiper;
}
