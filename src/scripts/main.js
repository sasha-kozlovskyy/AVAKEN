'use strict';

const h = document.querySelector('.nav__menu');
const n = document.querySelector('.nav');

h.addEventListener('click', () => {
  n.classList.toggle('nav--activ');
});
