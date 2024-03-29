'use strict';
document.addEventListener('DOMContentLoaded', () => {

  /*плавный скрол*/
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  };

  // HEADER-top-burger
  var burger = document.querySelector('.burger');
  var burgerClose = document.querySelector('.header-top-menu__burger-close');
  var menu = document.querySelector('.header-top-menu');
  var menuLinks = menu.querySelectorAll('.header-top-menu__link');
  var body = document.querySelector('body');

  burger.addEventListener('click', function () {
    burger.classList.add('burger__active');
    burgerClose.classList.add('header-top-menu__burger-close__active');
    menu.classList.toggle('header-top-menu__active');
    searchTopForm.classList.remove('search-top__active');
    body.classList.toggle('block');
  });

  burgerClose.addEventListener('click', function () {
    burger.classList.remove('burger__active');
    burgerClose.classList.remove('header-top-menu__burger-close__active');
    menu.classList.remove('header-top-menu__active');
    body.classList.remove('block');
  });

  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener('click', function () {
      burger.classList.remove('burger__active');
      burgerClose.classList.remove('header-top-menu__burger-close__active');
      menu.classList.remove('header-top-menu__active');
      body.classList.remove('block');
    });
  });


  // HEADER-top-search
  var searchTopBtn = document.querySelector('.header-top__btn-search');
  var searchTopForm = document.querySelector('.search-top');
  var btnCloseForm = document.querySelector('.search-top__btn-close');

  searchTopBtn.addEventListener('click', function () {
    searchTopForm.classList.add('search-top__active');
  });
  btnCloseForm.addEventListener('click', function () {
    searchTopForm.classList.remove('search-top__active');
  });


  // HEADER-content-dropdown
  document.querySelectorAll(".dropdown__simplebar").forEach((dropdown) => {
    new SimpleBar(dropdown, {
      autoHide: false,
      scrollbarMaxSize: 25
    });
  });

  const btns = document.querySelectorAll(".header-content-menu__btn");
  const dropdowns = document.querySelectorAll(".dropdown");
  const dropdownLinks = document.querySelectorAll('.dropdown__link');

  btns.forEach((item) => {
    var DropThis = item.parentElement.querySelector(".dropdown");
    item.addEventListener("click", function () {
      dropdowns.forEach((el) => {
        if (el != DropThis) {
          el.classList.remove('dropdown__active');
        }
      });
      btns.forEach((el) => {
        if (el != this) {
          el.classList.remove('header-content-menu__btn--active');
        }
      });
      DropThis.classList.toggle('dropdown__active');
      this.classList.toggle('header-content-menu__btn--active');
    });
    // закрытие при клике на элемент списка
    dropdownLinks.forEach(function (dropdownLink) {
      dropdownLink.addEventListener('click', function () {
        DropThis.classList.remove('dropdown__active');
        item.classList.remove('header-content-menu__btn--active');
      });
    });
    // закрытие при клике вне элемента списка
    document.addEventListener('click', e => {
      const target = e.target
      if (!target.closest('.dropdown') && !target.closest('.header-content-menu__btn')) {
        DropThis.classList.remove('dropdown__active');
        item.classList.remove('header-content-menu__btn--active');
      }
    });
    // закрытие списка кнопкой Escape
    document.addEventListener('keydown', function (e) {
      if (e.keyCode == 27) {
        DropThis.classList.remove('dropdown__active');
        item.classList.remove('header-content-menu__btn--active');
      }
    });
  });


  //HERO-swiper
  // swiper
  const swiperHero = new Swiper('.hero-swiper', {
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

  //choices-select
  const gallerySelect = () => {
    const element = document.querySelector('.gallery-form__select');
    const choicesSelect = new Choices(element, {
      searchEnabled: false, // строка поиска
    });
    var ariaLabel = element.getAttribute('aria-label');
    element.closest('.choices').setAttribute('aria-label', ariaLabel);
  };
  gallerySelect();

  //gallery-swiper
  const swiperGallery = new Swiper('.gallery-swiper', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    breakpoints: {
      1280: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      480: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
  });

  /*GALLERY-modal*/
  document.querySelectorAll('.swiper-wrapper__slide').forEach(function (galleryBtn) {
    galleryBtn.addEventListener('click', function (e) {
      const direction = e.currentTarget.dataset.direction;

      document.querySelectorAll('.gallery-modal').forEach(function (item) {
        item.classList.remove('gallery-modal--active')
      });
      document.querySelector(`[data-goal="${direction}"]`).classList.add('gallery-modal--active');
      body.classList.toggle('block');
    });
  });
  document.querySelectorAll('.gallery-modal__close-btn').forEach(function (galleryBtnClose) {
    galleryBtnClose.addEventListener('click', function (e) {
      document.querySelectorAll('.gallery-modal').forEach(function (item) {
        item.classList.remove('gallery-modal--active')
      });
      body.classList.remove('block');
    });
    document.addEventListener('keydown', function (el) {
      if (el.keyCode == 27) {
        document.querySelectorAll('.gallery-modal').forEach(function (item) {
          item.classList.remove('gallery-modal--active')
        });
        body.classList.remove('block');
      }
    });
  });

  // CATALOG-accordion
  var catalogAccordion = document.getElementById('accordion');
  accordion.addEventListener('click', change);
  function change(event) {
    var targ = event.target;
    if (targ.tagName !== 'BUTTON') return;
    if (targ.classList.contains('catalog-accordion__btn--active')) {
      hideAll();
    } else {
      hideAll();
      targ.classList.add('catalog-accordion__btn--active');
      showText(targ.nextElementSibling);
    }
  }
  function hideAll() {
    var btnCat = accordion.querySelectorAll('.catalog-accordion__btn');
    var contCat = accordion.querySelectorAll('.catalog-accordion__artist-list');
    for (var i = 0; i < btnCat.length; i++) {
      btnCat[i].classList.remove('catalog-accordion__btn--active');
    }
    for (var i = 0; i < contCat.length; i++) {
      contCat[i].style.height = '0';
      contCat[i].style.visibility = 'hidden';
    }
  }
  function showText(textEl) {
    textEl.style.height = textEl.scrollHeight + 'px';
    textEl.style.visibility = 'visible';
  }
  // catalog-tabs
  document.querySelectorAll('.artist-list__link').forEach(function (tabsLink) {
    tabsLink.addEventListener('click', function (e) {
      const way = e.currentTarget.dataset.way;

      document.querySelectorAll('.artist-list__link').forEach(function (artistLink) {
        artistLink.classList.remove('artist-list__link--active');
      });

      e.currentTarget.classList.add('artist-list__link--active');

      document.querySelectorAll('.accordion-content__card').forEach(function (artistCard) {
        artistCard.classList.remove('accordion-content__card--active');
      });

      document.querySelector(`[data-artist="${way}"]`).classList.add('accordion-content__card--active');
    });
  });

  // EVENTS-swiper
  const swiperEvents = new Swiper('.events-swiper', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 50,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1600: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 50,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27,
        pagination: {
          el: '.events-swiper__pagination',
          clickable: true,
        },
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
        pagination: {
          el: '.events-swiper__pagination',
          clickable: true,
        },
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        pagination: {
          el: '.events-swiper__pagination',
          clickable: true,
        },
      },
    },
  });

  // PROJECTS-swiper
  const swiper = new Swiper('.projects-swiper-block', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1280: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  });

  /*tooltip*/
  (() => {
    tippy(".js-tooltip-btn", {
      theme: "ssr",
      maxWidth: 290,
      trigger: 'click',
    });
  })();

  /*CONTACTS*/
  /*validation-form*/
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);
  new JustValidate('.contacts-form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 10
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
    },
    messages: {
      name: {
        required: 'Введите Ваше имя',
        minLength: 'Минимальное значение 2 символа',
        maxLength: 'Максимальное значение 20 символов'
      },
      tel: {
        required: 'Введите Ваш телефон',
        function: 'Минимальное значение 10 символов'
      },
    },
  });


  /*yandex-карта*/
  ymaps.ready(init);
  function init() {
    const contactsMap = document.querySelector("#contacts-map");
    const myMap = new ymaps.Map("contacts-map", {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 12,
      controls: ['geolocationControl', 'zoomControl']
    },
      {
        suppressMapOpenBlock: true,
        geolocationControlSize: "large",
        geolocationControlPosition: { top: "200px", right: "20px" },
        geolocationControlFloat: 'none',
        zoomControlSize: "small",
        zoomControlFloat: "none",
        zoomControlPosition: { top: "120px", right: "20px" }
      }
    );

    myMap.behaviors.disable('scrollZoom');

    const myPlacemark = new ymaps.Placemark(
      [55.75846806898367, 37.60108849999989],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "img/contacts/point.svg",
        iconImageSize: [20, 20],
        iconImageOffset: [-20, -40],
      }
    );
    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
    myMap.container.fitToViewport();
  };

});
