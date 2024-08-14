const images = document.querySelectorAll('.slider__img');
const sliderContainer = document.querySelector('.slider__container');
const slider = document.querySelector('.slider__content');

const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

let currentSlide = 1;

const slideCount = images.length;
slider.style.setProperty('--slide-count', slideCount);
let imageSize = images[0].clientWidth;

slider.style.transform = `translateX(${-imageSize}px)`;

btnLeft.addEventListener('click', () => {
    if (currentSlide <= 0) return;
    slider.style.transition = '200ms ease-in-out transform';
    images[currentSlide].classList.remove('active');
    currentSlide--;
    images[currentSlide].classList.add('active');
    slider.style.transform = `translateX(${-imageSize * currentSlide}px)`;
});

btnRight.addEventListener('click', () => {
    if (currentSlide >= images.length - 1) return;
    slider.style.transition = '200ms ease-in-out transform';
    images[currentSlide].classList.remove('active');
    currentSlide++;
    images[currentSlide].classList.add('active');
    slider.style.transform = `translateX(${-imageSize * currentSlide}px)`;
});

slider.addEventListener('transitionend', () => {
    if (images[currentSlide].classList.contains('first_img')) {
        slider.style.transition = 'none';
        images[currentSlide].classList.remove('active');
        currentSlide = images.length - 2;
        images[currentSlide].classList.add('active');
        slider.style.transform = `translateX(${-imageSize * currentSlide}px)`;
    }
    if (images[currentSlide].classList.contains('last_img')) {
        slider.style.transition = 'none';
        images[currentSlide].classList.remove('active');
        currentSlide = images.length - currentSlide;
        images[currentSlide].classList.add('active');
        slider.style.transform = `translateX(${-imageSize * currentSlide}px)`;
    }
});

window.addEventListener('resize', () => {
    imageSize = images[0].clientWidth;
    slider.style.transform = `translateX(${-imageSize * currentSlide}px)`;
});
