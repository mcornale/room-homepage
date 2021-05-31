import "regenerator-runtime/runtime";

const imgSlides = document.querySelectorAll(".slider__img");
const textSlides = document.querySelectorAll(".slider__text");
const slideLeft = document.querySelector(".slider__arrow--left");
const slideRight = document.querySelector(".slider__arrow--right");
const openNav = document.querySelector(".header__icon--open");
const closeNav = document.querySelector(".header__icon--close");
const nav = document.querySelector(".nav");
const sliderAnim = document.querySelector(".slider__cover-animation");

const imgSlidesArr = Array.from(imgSlides);
const textSlidesArr = Array.from(textSlides);

let activeSlide = 0;
let slideToHide;
const maxSlide = imgSlidesArr.length;

const prevSlide = function () {
    slideToHide = activeSlide;
    if (activeSlide === 0) {
        activeSlide = maxSlide - 1;
    } else {
        activeSlide--;
    }

    changeSlide("left");
};

const nextSlide = function () {
    slideToHide = activeSlide;
    if (activeSlide === maxSlide - 1) {
        activeSlide = 0;
    } else {
        activeSlide++;
    }

    changeSlide("right");
};

const changeSlide = async function (direction) {
    const mov = direction === "left" ? 1 : -1;

    textSlidesArr[activeSlide].classList.add("slider__text--active");
    textSlidesArr[slideToHide].classList.remove("slider__text--active");

    await sliderAnim.animate(
        [
            { transform: `translateX(calc(${mov}*100%))` },
            { transform: "translateX(0)" },
        ],
        {
            duration: 600,
            easing: "cubic-bezier(0.42, 0, 0, 0.92)",
            fill: "both",
        }
    ).finished;

    imgSlidesArr[activeSlide].classList.add("slider__img--active");
    imgSlidesArr[slideToHide].classList.remove("slider__img--active");

    await sliderAnim.animate(
        [
            { transform: "translateX(0)" },
            { transform: `translateX(calc(-1*${mov}*100%))` },
        ],
        {
            duration: 600,
            easing: "cubic-bezier(0.42, 0, 0, 0.92)",
            fill: "both",
        }
    );
};

slideLeft.addEventListener("click", prevSlide);
slideRight.addEventListener("click", nextSlide);

openNav.addEventListener("click", function () {
    nav.classList.add("nav--active");
});

closeNav.addEventListener("click", function () {
    nav.classList.remove("nav--active");
});
