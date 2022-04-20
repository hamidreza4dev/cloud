import '../scss/tailwind.scss';
import './accordion';

const searchBtn = document.querySelector('#searchBtn');
const searchBox = document.querySelector('#searchBox');
searchBtn.addEventListener('click', () => {
  searchBox.classList.toggle('active');
});

// scroll down btn
const btnScrollDown = document.querySelector('#scrollDown');
btnScrollDown.addEventListener('click', (e) => {
  /** @type {HTMLElement} */
  const target = e.target.closest('header');
  if (!target) return;

  target.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
});

// map configuration
window.onload = function () {
  let map = L.map('map').setView([36.2882219, 59.6156293], 16);

  L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  }).addTo(map);
}; // end onload
