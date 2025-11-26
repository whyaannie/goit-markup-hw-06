const modal = document.querySelector('[data-menu]');
const openBtn = document.querySelector('[data-menu-open]');
const closeBtn = document.querySelector('[data-menu-close]');

openBtn.addEventListener('click', () => {
  modal.classList.remove('is-open');
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('is-open');
});