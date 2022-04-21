export default (function () {
  const accordion = document.querySelectorAll('.accordion-btn');
  if (accordion.length) {
    accordion.forEach((accordionItem) => {
      accordionItem.addEventListener('click', async () => {
        accordionItem.classList.toggle('active');

        let panel;
        // check if is target specified
        if (accordionItem.getAttribute('data-target')) {
          panel = document.querySelector(
            accordionItem.getAttribute('data-target')
          );
        } else {
          panel = accordionItem.nextElementSibling;
        }

        if (panel.style.maxHeight) {
          /*
          * restore height
            We restore the height so that the animation works well :
            Because we deleted the height so that if the user changed the contents of the panel, the height would change automatically
        */
          panel.style.maxHeight = panel.scrollHeight + 'px';
          // close accordion
          setTimeout(() => {
            panel.style.maxHeight = null;
          }, 0);
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
          // clear height (because if a user tries to change the content of the panel, the height will change automatically)
          panel.addEventListener(
            'transitionend',
            () => {
              panel.style.maxHeight = 'unset';
            },
            { once: true }
          );
        }
      });
    });
  }
})();
