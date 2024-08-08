const items = document.querySelectorAll('.list__item');
const btnNext = document.querySelector('.btn__next');
const btnPrev = document.querySelector('.btn__prev');
const previewItems = document.querySelectorAll('.preview__item');

let countSlides = items.length;
let activeSlide = 0;

btnNext.addEventListener('click', () => {
    activeSlide = activeSlide + 1;
    if (activeSlide >= countSlides) {
        activeSlide = 0;
    }
    showSlider();
});

btnPrev.addEventListener('click', () => {
    activeSlide = activeSlide - 1;
    if (activeSlide < 0) {
        activeSlide = countSlides - 1;
    }
    showSlider();
});

let autoRunSlider = setInterval(() => {
    btnNext.click();
}, 3000);

function showSlider() {
    let itemActiveOld = document.querySelector('.list__item.active');
    let itemPreviewActiveOld = document.querySelector('.preview__item.active');

    itemActiveOld.classList.remove('active');
    itemPreviewActiveOld.classList.remove('active');

    items[activeSlide].classList.add('active');
    previewItems[activeSlide].classList.add('active');

    clearInterval(autoRunSlider);
    autoRunSlider = setInterval(() => {
        btnNext.click();
    }, 5000);
}

previewItems.forEach((slide, index) =>
    slide.addEventListener('click', () => {
        activeSlide = index;
        showSlider();
    })
);
