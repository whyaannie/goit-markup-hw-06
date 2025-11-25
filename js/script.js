const modal = document.querySelector('[data-modal]');
const openBtn = document.querySelector('[data-modal-open]');
const closeBtn = document.querySelector('[data-modal-close]');

openBtn.addEventListener('click', () => {
  modal.classList.remove('is-open');
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('is-open');
});