import Swiper, { Navigation, Pagination } from 'swiper';
// import 'leaflet';
// import 'leaflet/dist/leaflet.css';
import Aos from 'aos';
Aos.init();

import flatpickr from 'flatpickr';
import { Persian } from 'flatpickr/dist/l10n/fa.js';
import rangePlugin from 'flatpickr/dist/plugins/rangePlugin';

flatpickr('#startDate', {
  locale: Persian,
  altInput: true,
  inline: true,
  plugins: [new rangePlugin({ input: '#toDate' })],
});

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
