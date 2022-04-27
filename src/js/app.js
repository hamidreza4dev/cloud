import '../scss/tailwind.scss';
import './accordion';

const searchBtn = document.querySelector('#searchBtn');
const searchBox = document.querySelector('#searchBox');
document.addEventListener('click', function (event) {
  const isClickInside = searchBox.contains(event.target);

  if (
    !isClickInside &&
    !searchBtn.isEqualNode(event.target.closest(`#${searchBtn.id}`))
  ) {
    searchBox.classList.remove('active');
  }
});

searchBtn.addEventListener('click', () => {
  searchBox.classList.toggle('active');
});

// scroll down btn
const btnScrollDown = document.querySelector('#scrollDown');
if (btnScrollDown) {
  btnScrollDown.addEventListener('click', (e) => {
    /** @type {HTMLElement} */
    const target = e.target.closest('header');
    if (!target) return;

    window.scrollTo({
      top: target.nextElementSibling.getBoundingClientRect().top - 30,
      behavior: 'smooth',
    });
  });
}

// map configuration
window.addEventListener('load', function () {
  if (document.querySelector('#map')) {
    let map = L.map('map').setView([36.2882219, 59.6156293], 16);

    L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    }).addTo(map);
  }
}); // end onload
