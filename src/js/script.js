const imgSlides = document.querySelectorAll(".slider__img");
const textSlides = document.querySelectorAll(".slider__text");
const slideLeft = document.querySelector(".slider__arrow--left");
const slideRight = document.querySelector(".slider__arrow--right");
const openNav = document.querySelector(".header__icon--open");
const closeNav = document.querySelector(".header__icon--close");
const nav = document.querySelector(".nav");

const imgSlidesArr = Array.from(imgSlides);
const textSlidesArr = Array.from(textSlides);

let activeSlide = 0;
const maxSlide = imgSlidesArr.length;

const prevSlide = () => {
    const slideToHide = activeSlide;
    if (activeSlide === 0) {
        activeSlide = maxSlide - 1;
    } else {
        activeSlide--;
    }

    changeSlide(activeSlide, slideToHide);
};

const nextSlide = () => {
    const slideToHide = activeSlide;
    if (activeSlide === maxSlide - 1) {
        activeSlide = 0;
    } else {
        activeSlide++;
    }

    changeSlide(activeSlide, slideToHide);
};

const changeSlide = (activeSlide, slideToHide) => {
    imgSlidesArr[activeSlide].classList.add("slider__img--active");
    imgSlidesArr[slideToHide].classList.remove("slider__img--active");

    textSlidesArr[activeSlide].classList.add("slider__text--active");
    textSlidesArr[slideToHide].classList.remove("slider__text--active");
};

slideLeft.addEventListener("click", prevSlide);
slideRight.addEventListener("click", nextSlide);
openNav.addEventListener("click", function () {
    nav.classList.add("nav--active");
});

closeNav.addEventListener("click", function () {
    nav.classList.remove("nav--active");
});
