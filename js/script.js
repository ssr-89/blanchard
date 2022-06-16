'use strict';

// header-top-burger
var burger = document.querySelector('.burger');
var menu = document.querySelector('.header-top-menu');
var menuLinks = menu.querySelectorAll('.header-top-menu__link');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger__active');
  menu.classList.toggle('header-top-menu__active');
  searchTopForm.classList.remove('search-top__active');
});

menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener('click', function () {
    burger.classList.remove('burger__active');
    menu.classList.remove('header-top-menu__active');
  });
});

// header-top-search
var searchTopBtn = document.querySelector('.header-top__btn-search');
var searchTopForm = document.querySelector('.search-top');
var btnCloseForm = document.querySelector('.search-top__btn-close');

searchTopBtn.addEventListener('click', function () {
  searchTopForm.classList.add('search-top__active');
});
btnCloseForm.addEventListener('click', function () {
  searchTopForm.classList.remove('search-top__active');
});



// header-content-dropdown
document.querySelectorAll(".dropdown__simplebar").forEach((dropdown) => {
  new SimpleBar(dropdown, {
    autoHide: false,
    scrollbarMaxSize: 25
  });
});

const btns = document.querySelectorAll(".header-content-menu__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "header-content-menu__btn--active";

btns.forEach((item) => {
  item.addEventListener("click", function () {
    var DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach((el) => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns);
      }
    });
    btns.forEach((el) => {
      if (el != this) {
        el.classList.remove(activeClassbtns);
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  });
});


//HERO-SWIPER
// swiper
const swiper = new Swiper('.swiper', {
  // кол-во слайдов для показа
  slidesPerView: 1,

  // кол-во перелистываемых слайдов
  slidesPerGroup: 1,

  // бесконечный цикл прокрутки
  loop: true,

  // автопрокрутка
  autoplay: {
    // Пауза между прокруткой (миллисекунды)
    delay: 3000,
  },
  speed: 3000,

  // эффект переключения слайдов сменой прозрачности
  effect: "fade",

  // Дополнение к fade
  fadeEffect: {
    // параллельная смена прозрачности
    crossFade: true,
  },
});
