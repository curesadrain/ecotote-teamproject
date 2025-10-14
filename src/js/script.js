const burgerButton = document.querySelector('.button-burger');
const mobileMenu = document.querySelector('.header-menu');
const closeButton = document.querySelector('.button-cross');

burgerButton.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});
