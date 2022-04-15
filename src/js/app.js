import '../scss/tailwind.scss';
import './accordion';

const searchBtn = document.querySelector('#searchBtn');
const searchBox = document.querySelector('#searchBox');
searchBtn.addEventListener('click', () => {
  searchBox.classList.toggle('active');
});
