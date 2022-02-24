window.addEventListener('DOMContentLoaded', () => {
  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.hero__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  })();

  // * ===== Slider
  (function sliderReviews() {
    const sliderEl = document.querySelector('.reviews__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 25,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  })();

  // * ===== Slider
  (function sliderDescr() {
    const sliderEl = document.querySelector('.descr__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 25,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  })();

  // * ==== Single Product
  (function verticalSlider() {
    let mySwiperNav = new Swiper('#slider-nav', {
      slidesPerView: 'auto',
      spaceBetween: 12,
      direction: 'vertical',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,

      breakpoints: {
        320: {
          direction: 'horizontal',
        },
        768: {
          direction: 'vertical',
        },
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    let mySwiper = new Swiper('#slider-main', {
      spaceBetween: 10,
      loopedSlides: 4,
      thumbs: {
        swiper: mySwiperNav,
      },
    });
  })();

  // * ===== Custom select
  (function customSelect() {
    const selects = document.querySelectorAll('.select');
    selects.forEach((el) => {
      const select = new Choices(el, {
        itemSelectText: '',
        searchEnabled: false,
      });
    });
  })();

  // ! Разобраться
  // function checkboxCheck() {
  //   const checkboxes = document.querySelectorAll('input[type=radio]');

  //   // console.log(checkboxes.checked);
  //   checkboxes.forEach((el) => {
  //     console.log(el);
  //     if (el.checked) {
  //       console.log(1);
  //       el.classList.toggle('active');
  //     }
  //   });
  // }

  // checkboxCheck();

  // function circularSlider() {
  //   let htmlCollection = document.getElementsByClassName('advantages__slide');

  //   let itemsId = Array.from(htmlCollection);

  //   let sectionDeg = 360 / itemsId.length;

  //   let radianSectionDeg = (sectionDeg * Math.PI * 2) / 360;

  //   let radiusLength = 160;

  //   const nextBtn = document.querySelector('.right');
  //   const prevBtn = document.querySelector('.left');

  //   for (var i = 0; i < itemsId.length; i++) {
  //     itemsId[i].style.top =
  //       radiusLength * Math.sin(radianSectionDeg * i - 1.5708) + 'px';
  //     itemsId[i].style.left =
  //       radiusLength * Math.cos(radianSectionDeg * i - 1.5708) + 'px';
  //   }

  //   function makeATurn() {
  //     for (var i = 0; i < itemsId.length; i++) {
  //       itemsId[i].style.top =
  //         radiusLength * Math.sin(radianSectionDeg * i - 1.5708) + 'px';
  //       itemsId[i].style.left =
  //         radiusLength * Math.cos(radianSectionDeg * i - 1.5708) + 'px';
  //     }
  //   }

  //   function turnRight() {
  //     var holder = itemsId.pop();
  //     itemsId.unshift(holder);
  //     makeATurn();
  //   }

  //   function turnLeft() {
  //     var holder = itemsId.shift();
  //     itemsId.push(holder);
  //     makeATurn();
  //   }

  //   nextBtn.addEventListener('click', turnRight);
  //   prevBtn.addEventListener('click', turnLeft);
  // }
  // circularSlider();
  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });

    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);

    filters.forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = e.target.closest(accordion);
        const content = target.querySelector(accordionContent);

        target.classList.toggle('active');

        if (target.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  };

  toggleAccordion('.accordion__control', '.accordion__content', '.accordion');

  // * ===== Circular Slider
  (function () {
    'use strict';

    function startSetup(
      sliderSize,
      slideSize,
      animationDuration,
      autoplayInterval
    ) {
      this.sliderSize = parseFloat(sliderSize) / 80;
      this.slideSize = parseFloat(slideSize) / 80;
      this.animationDuration = parseFloat(animationDuration);
      this.autoplayInterval = parseFloat(autoplayInterval);
    }

    function Slider(
      newSlider,
      sliderSize,
      slideSize,
      animationDuration,
      autoplayInterval
    ) {
      (this.startSetup = new startSetup(
        sliderSize,
        slideSize,
        animationDuration,
        autoplayInterval
      )),
        (this.wrapper = newSlider.querySelector('.wrapper'));

      this.slides = newSlider.querySelectorAll(
        '.circular-slider .wrapper .slides-holder .slides-holder__item'
      );

      this.slidesSize = 0;

      this.descriptionsHolder = newSlider.querySelector(
        '.circular-slider .wrapper .descriptions'
      );

      this.descriptions = newSlider.querySelectorAll(
        '.circular-slider .wrapper .descriptions .descriptions__item'
      );

      this.slidesHolder = newSlider.querySelector(
        '.circular-slider .wrapper .slides-holder'
      );

      this.btnLeft = newSlider.querySelector(
        '.circular-slider .wrapper .controls .controls__control--left'
      );

      this.btnRight = newSlider.querySelector(
        '.circular-slider .wrapper .controls .controls__control--right'
      );

      this.btnAutoplay = newSlider.querySelector(
        '.circular-slider .wrapper .controls .controls__autoplay'
      );

      this.currentAngle = 0;

      this.stepAngle =
        (2 * Math.PI) /
        newSlider.querySelectorAll(
          '.circular-slider .wrapper .slides-holder .slides-holder__item'
        ).length;

      this.currentSlide = 0;

      this.slidesHolder.style.transitionDuration =
        this.startSetup.animationDuration + 'ms';
      this.onResize();
      this.setAutoplay();
      this.setNav();
      this.addStyle();

      let _this = this;
      this.btnAutoplay.onclick = function () {
        if (this.classList.contains('controls__autoplay_running')) {
          this.classList.remove('controls__autoplay_running');
          this.classList.add('controls__autoplay_paused');
          clearInterval(_this.autoplay);
          _this.autoplay = null;
        } else {
          this.classList.remove('controls__autoplay_paused');
          this.classList.add('controls__autoplay_running');
          _this.setAutoplay();
        }
      };
    }

    Slider.prototype.onResize = function () {
      let radius,
        w = this.wrapper.parentNode.getBoundingClientRect().width,
        h = this.wrapper.parentNode.getBoundingClientRect().height;

      2 * h <= w
        ? (radius = h * this.startSetup.sliderSize)
        : (radius = (w / 2) * this.startSetup.sliderSize);

      this.setSize(Math.round(radius));
    };

    Slider.prototype.setSize = function (radius) {
      this.wrapper.style.width = 100 + '%';
      this.wrapper.style.height = 100 + '%';

      let r = 2 * radius * (1 - this.startSetup.slideSize);
      this.slidesHolder.style.width = this.slidesHolder.style.height = r + 'px';
      this.slidesRepositioning(r / 2);

      this.slidesHolder.style.marginTop =
        radius * this.startSetup.slideSize + 'px';
      this.descriptionsHolder.style.width =
        (r / 2 - r * this.startSetup.slideSize + 20) * 2 + 'px';
      this.descriptionsHolder.style.height =
        r / 2 - r * this.startSetup.slideSize + 20 + 'px';

      this.slidesSize = Math.min(
        2 * radius * this.startSetup.slideSize,
        this.stepAngle * radius * (1 - this.startSetup.slideSize) - 50
      );
      this.descriptionsHolder.style.fontSize =
        window.innerHeight < window.innerWidth ? '1.2vh' : '1.2vw';
      for (let i = 0; i < this.slides.length; i++) {
        this.slides[i].style.width = this.slides[i].style.height =
          this.slidesSize + 'px';
      }
    };

    Slider.prototype.slidesRepositioning = function (r) {
      for (let i = 0; i < this.slides.length; i++) {
        let x = r * Math.cos(this.stepAngle * i - Math.PI / 2),
          y = r * Math.sin(this.stepAngle * i - Math.PI / 2);
        this.slides[i].style.transform =
          'translate( ' +
          x +
          'px, ' +
          y +
          'px ) rotate( ' +
          ((this.stepAngle * 180) / Math.PI) * i +
          'deg )';
      }
    };

    Slider.prototype.rotate = function (multiplier) {
      let _this = this;

      this.removeStyle();
      this.resetNavs();

      if (this.currentSlide === this.slides.length - 1 && multiplier === -1) {
        this.slidesHolder.style.transform = 'rotate( -360deg )';
        this.currentSlide = this.currentAngle = 0;
        this.addStyle();

        setTimeout(function () {
          _this.slidesHolder.style.transitionDuration = 0 + 's';
          _this.slidesHolder.style.transform =
            'rotate( ' + _this.currentAngle + 'deg )';
          setTimeout(function () {
            _this.slidesHolder.style.transitionDuration =
              _this.startSetup.animationDuration + 'ms';
          }, 20);
        }, this.startSetup.animationDuration);
      } else if (this.currentSlide === 0 && multiplier === 1) {
        this.slidesHolder.style.transform =
          'rotate( ' + (this.stepAngle * 180) / Math.PI + 'deg )';
        this.currentSlide = _this.slides.length - 1;
        this.currentAngle = (-(2 * Math.PI - _this.stepAngle) * 180) / Math.PI;
        this.addStyle();

        setTimeout(function () {
          _this.slidesHolder.style.transitionDuration = 0 + 's';
          _this.slidesHolder.style.transform =
            'rotate( ' + _this.currentAngle + 'deg )';
          setTimeout(function () {
            _this.slidesHolder.style.transitionDuration =
              _this.startSetup.animationDuration + 'ms';
          }, 20);
        }, this.startSetup.animationDuration);
      } else {
        this.currentSlide -= multiplier;
        this.currentAngle += ((this.stepAngle * 180) / Math.PI) * multiplier;
        this.slidesHolder.style.transform =
          'rotate( ' + this.currentAngle + 'deg )';
        this.addStyle();
      }
    };

    Slider.prototype.setNav = function () {
      let _this = this;
      _this.btnLeft.onclick = function () {
        _this.rotate(1);
      };
      _this.btnRight.onclick = function () {
        _this.rotate(-1);
      };
    };

    Slider.prototype.disableNav = function () {
      this.btnLeft.onclick = null;
      this.btnRight.onclick = null;
    };

    Slider.prototype.setAutoplay = function () {
      let _this = this;
      this.autoplay = setInterval(function () {
        _this.rotate(-1);
      }, _this.startSetup.autoplayInterval + 20);
    };

    Slider.prototype.removeStyle = function () {
      let x = this.currentSlide;

      this.descriptions[x].classList.remove('descriptions__item_visible');
      this.slides[x].classList.remove('slides-holder__item_active');
      this.slides[x].style.height = this.slides[x].style.width =
        this.slidesSize + 'px';
    };

    Slider.prototype.addStyle = function () {
      let x = this.currentSlide;

      this.descriptions[x].classList.add('descriptions__item_visible');
      this.slides[x].classList.add('slides-holder__item_active');
      this.slides[x].style.height = this.slides[x].style.width =
        this.slidesSize + 20 + 'px';
    };

    Slider.prototype.resetNavs = function () {
      let _this = this;

      this.disableNav();
      setTimeout(function () {
        _this.setNav();
      }, this.startSetup.animationDuration + 20);
      if (this.autoplay != null) {
        clearInterval(this.autoplay);
        this.setAutoplay();
      }
    };

    window.circularSlider1 = new Slider(
      document.querySelector('.circular-slider-1'),
      40,
      15,
      600,
      2500
    );

    let sliders = [window.circularSlider1];

    window.onresize = function () {
      for (let i = 0; i < sliders.length; i++) {
        sliders[i].resetNavs();
        sliders[i].onResize();
      }
    };
  })();

  // // * ===== Modal
  // (function modals() {
  //   function bindModal(openBtn, modal, close) {
  //     const openBtnEl = document.querySelectorAll(openBtn);
  //     const modalEl = document.querySelector(modal);
  //     const closeEl = document.querySelectorAll(close);
  //     const body = document.querySelector('body');

  //     if (modalEl) {
  //       openBtnEl.forEach((el) => {
  //         el.addEventListener('click', (e) => {
  //           if (e.target) {
  //             e.preventDefault();
  //           }

  //           modalEl.classList.add('active');
  //           body.classList.add('no-scroll');
  //         });
  //       });

  //       closeEl.forEach((btn) => {
  //         btn.addEventListener('click', (e) => {
  //           modalEl.classList.remove('active');
  //           body.classList.remove('no-scroll');
  //         });
  //       });

  //       modalEl.addEventListener('click', (e) => {
  //         if (e.target === modalEl) {
  //           modalEl.classList.remove('active');
  //           body.classList.remove('no-scroll');
  //         }
  //       });
  //     }
  //   }
  //   bindModal('.download__btn', '.popup--download', '.popup__close');
  //   bindModal('.header__favorite', '.popup--card-object', '.popup__close');
  //   bindModal('.get-presentation', '.popup--get-info', '.popup__close');
  //   bindModal('.presentation__download', '.popup--get-info', '.popup__close');
  // })();

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    if (header) {
      hideTabContent();
      showTabContent();

      function hideTabContent() {
        content.forEach((item) => {
          item.classList.remove('active');
        });
        tab.forEach((item) => {
          item.classList.remove(activeClass);
        });
      }

      function showTabContent(i = 0) {
        content[i].classList.add('active');
        tab[i].classList.add(activeClass);
      }

      header.forEach((item) => {
        if (item) {
          item.addEventListener('click', (e) => {
            const target = e.target;

            if (target.classList.contains(tabSelector.replace(/\./, ''))) {
              tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                  hideTabContent();
                  showTabContent(i);
                }
              });
            }
          });
        }
      });
    }
  }
  someTabs(
    '.tabs-spec',
    '.tabs-spec__btn',
    '.tabs-spec__content',
    'tabs-spec__btn--active'
  );
});
