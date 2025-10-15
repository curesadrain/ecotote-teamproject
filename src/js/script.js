// MOB MENU TOGGLE
const burgerButton = document.querySelector('.button-burger');
const mobileMenu = document.querySelector('.header-menu');
const closeButton = document.querySelector('.button-cross');

burgerButton.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});

// MOB MENU ANCHOR WORKAROUND
const menuLinks = document.querySelectorAll('.header-menu-link');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
});

// LAZY IMAGES LOAD
const images = document.querySelectorAll('img');
images.forEach(img => {
  if (!img.hasAttribute('loading')) {
    img.setAttribute('loading', 'lazy');
  }
});
