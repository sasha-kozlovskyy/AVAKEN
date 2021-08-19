/* eslint-disable no-undef */
'use strict';

const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const white = document.querySelector('.white');
const black = document.querySelector('.black');
const crossWhite = document.querySelector('.cross-white');
const crossBlack = document.querySelector('.cross-black');
const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo--position');
const list = document.querySelectorAll('.nav__link');
const link = Array.prototype.slice.call(list);

const origOffsetY = 1;

menu.addEventListener('click', () => {
  nav.classList.toggle('nav--activ');
  crossWhite.classList.toggle('activ');
  crossBlack.classList.toggle('activ');
  white.classList.toggle('white--activ');
  black.classList.toggle('black--activ');
  menu.classList.toggle('menu--active');
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

function onScrollLogo(e) {
  window.scrollY >= origOffsetY
    ? headerLogo.classList.add('display')
    : headerLogo.classList.remove('display');
}

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

function onScrollOpacityWhite(e) {
  window.scrollY >= origOffsetY
    ? white.classList.add('white--opacity')
    : white.classList.remove('white--opacity');
}

function onScrollOpacityBlack(e) {
  window.scrollY >= origOffsetY
    ? black.classList.add('black--opacity')
    : black.classList.remove('black--opacity');
}

function onScrollCrossOpacityBlack(e) {
  window.scrollY >= origOffsetY
    ? crossBlack.classList.add('cross-black--opacity')
    : crossBlack.classList.remove('cross-black--opacity');
}

function onScrollCrossOpacityWhite(e) {
  window.scrollY >= origOffsetY
    ? crossWhite.classList.add('cross-white--opacity')
    : crossWhite.classList.remove('cross-white--opacity');
}

document.addEventListener('scroll', onScroll);
document.addEventListener('scroll', onScrollColor);
document.addEventListener('scroll', onScrollLogo);
document.addEventListener('scroll', onScrollOpacityWhite);
document.addEventListener('scroll', onScrollOpacityBlack);
document.addEventListener('scroll', onScrollCrossOpacityBlack);
document.addEventListener('scroll', onScrollCrossOpacityWhite);
