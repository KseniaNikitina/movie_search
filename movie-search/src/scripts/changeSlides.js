export default function changeSlidesPerView(swiper) {
  console.log('change slides');
  const tabletScreenWidth = 768;
  const phoneScreenWidth = 375;
  if (window.screen.width > tabletScreenWidth) {
    swiper.params.slidesPerView = 4;
  } else if (window.screen.width <= tabletScreenWidth && window.screen.width > phoneScreenWidth) {
    swiper.params.slidesPerView = 2;
  } else if (window.screen.width <= phoneScreenWidth) {
    swiper.params.slidesPerView = 1;
  }
  swiper.update();
}
