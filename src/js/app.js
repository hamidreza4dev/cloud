import '../scss/tailwind.scss';
import './accordion';
import './modal';

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

// check if [data-scroll-overlay] elements pass to end

const scrollOverlays = document.querySelectorAll('[data-scroll-overlay]');
if (scrollOverlays.length) {
  scrollOverlays.forEach((item) => {
    item
      .querySelector('[class*="overflow"]')
      .addEventListener('scroll', (e) => {
        const scrollSize = e.target.scrollTop + e.target.offsetHeight;
        const scrollHeight = e.target.scrollHeight;

        scrollSize === scrollHeight
          ? item.setAttribute('data-scroll-overlay', 0)
          : item.setAttribute('data-scroll-overlay', '');
      });
  });
}

const selectTimes = document.getElementById('selectTimes');
const deleteTimes = document.getElementById('deleteTimes');
const timeContainer = document.getElementById('timeContainer');

if (timeContainer) {
  function checkboxTrigger(state) {
    const checkboxes = timeContainer.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      if (!checkbox.disabled) {
        checkbox.checked = state;
      }
    });
  }

  selectTimes.addEventListener('click', checkboxTrigger.bind(null, true));
  deleteTimes.addEventListener('click', checkboxTrigger.bind(null, false));
}

const clearAllCart = document.getElementById('clearAllCart');
const shoppingCartContainer = document.getElementById('shoppingCartContainer');

if (clearAllCart) {
  clearAllCart.addEventListener('click', () => {
    [...shoppingCartContainer.children].forEach((item) => item.remove());
  });
}
