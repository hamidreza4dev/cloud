export default (function () {
  const allModals = document.querySelectorAll('[data-modal]');

  if (allModals.length) {
    const overlay = document.querySelector('.overlay');
    function modal(targetModal) {
      const allModals = document.querySelectorAll('.modal');
      for (let i = 0; i < allModals.length; i++) {
        allModals[i].classList.remove('active');
      }

      const target = document.getElementById(targetModal);
      overlay.classList.add('active');
      target.classList.add('active');

      // close btn
      const closeModalBtn = target.querySelectorAll('.close-modal-btn');
      if (closeModalBtn.length) {
        closeModalBtn.forEach((item) => {
          item.addEventListener('click', closeModal, { once: true });
        });
      }
      overlay.addEventListener('click', closeModal, { once: true });

      // Escape Kay
      document.addEventListener(
        'keydown',
        (e) => {
          if (e.key === 'Escape') {
            closeModal();
          }
        },
        { once: true }
      );

      // toggle modal options
      function closeModal() {
        overlay.classList.remove('active');
        target.classList.remove('active');
      }
    }

    allModals.forEach((item) => {
      item.addEventListener('click', () => {
        modal(item.getAttribute('data-modal'));
      });
    });
  }
})();
