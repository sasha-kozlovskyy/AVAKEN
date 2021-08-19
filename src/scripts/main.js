/* eslint-disable no-undef */
'use strict';

const h = document.querySelector('.menu');
const n = document.querySelector('.nav');

h.addEventListener('click', () => {
  n.classList.toggle('nav--activ');
});

// eslint-disable-next-line no-undef
// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper-container', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
});

const header = document.querySelector('.header');
const link = document.querySelectorAll('.nav__link');

const origOffsetY = 100;

function onScroll(e) {
  window.scrollY >= origOffsetY
    ? header.classList.add('sticky', 'backgroud')
    : header.classList.remove('sticky', 'backgroud');
}

function onScrollColor(e) {
  window.scrollY >= origOffsetY
    ? link.map(x => x.classList.add('color'))
    : link.map(x => x.classList.remove('color'));
}

document.addEventListener('scroll', onScroll);
document.addEventListener('scroll', onScrollColor);
