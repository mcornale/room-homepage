import 'regenerator-runtime/runtime';

const imgSlides = document.querySelectorAll('.slider__img');
const textSlides = document.querySelectorAll('.slider__text');
const sliderControls = document.querySelector('.slider__controls');
const sliderLeftControl = document.querySelector('.slider__arrow--left');
const sliderRightControl = document.querySelector('.slider__arrow--right');
const openNav = document.querySelector('.header__icon--open');
const closeNav = document.querySelector('.header__icon--close');
const nav = document.querySelector('.nav');
const sliderAnim = document.querySelector('.slider__cover-animation');

const imgSlidesArr = Array.from(imgSlides);
const textSlidesArr = Array.from(textSlides);
const maxSlide = imgSlidesArr.length;

let activeSlide = 0;
let slideToHide;
let isAnimating = false;

const prevSlide = function () {
  slideToHide = activeSlide;
  if (activeSlide === 0) {
    activeSlide = maxSlide - 1;
  } else {
    activeSlide--;
  }

  changeSlide('left');
};

const nextSlide = function () {
  slideToHide = activeSlide;
  if (activeSlide === maxSlide - 1) {
    activeSlide = 0;
  } else {
    activeSlide++;
  }

  changeSlide('right');
};

const changeSlide = async function (direction) {
  isAnimating = true;
  const mov = direction === 'left' ? 1 : -1;

  textSlidesArr[activeSlide].classList.add('slider__text--active');
  textSlidesArr[slideToHide].classList.remove('slider__text--active');

  await sliderAnim.animate(
    [
      { transform: `translateX(calc(${mov}*100%))` },
      { transform: 'translateX(0)' },
    ],
    {
      duration: 600,
      easing: 'cubic-bezier(0.42, 0, 0, 0.92)',
      fill: 'both',
    }
  ).finished;

  imgSlidesArr[activeSlide].classList.add('slider__img--active');
  imgSlidesArr[slideToHide].classList.remove('slider__img--active');

  await sliderAnim.animate(
    [
      { transform: 'translateX(0)' },
      { transform: `translateX(calc(-1*${mov}*100%))` },
    ],
    {
      duration: 600,
      easing: 'cubic-bezier(0.42, 0, 0, 0.92)',
      fill: 'both',
    }
  );

  isAnimating = false;
};

sliderControls.addEventListener('click', (event) => {
  if (isAnimating) return;

  if (event.target === sliderLeftControl) prevSlide();
  if (event.target === sliderRightControl) nextSlide();
});

document.addEventListener('keydown', (event) => {
  if (isAnimating) return;
  if (event.code === 'ArrowLeft') prevSlide();
  if (event.code === 'ArrowRight') nextSlide();
});

openNav.addEventListener('click', function () {
  nav.classList.add('nav--active');
});

closeNav.addEventListener('click', function () {
  nav.classList.remove('nav--active');
});
