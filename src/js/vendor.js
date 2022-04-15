import Swiper, { Navigation, Pagination } from 'swiper';
import Aos from 'aos';
Aos.init();

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.header-swiper .swiper-handler', {
  pagination: {
    el: '.header-swiper .swiper-pagination-custom',
    clickable: true,
  },
  navigation: {
    nextEl: '.header-swiper .swiper-button-next-custom',
    prevEl: '.header-swiper .swiper-button-prev-custom',
  },
  loop: true,
});
