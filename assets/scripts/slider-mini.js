const images = document.querySelectorAll('.slider-mini__container .slider-mini__slider-line img');
const sliderLine = document.querySelector('.slider-mini__slider-line');
let count = 0;
let width;_

function init() {
    console.log('resize');
    width = document.querySelector('.slider-mini__container').offsetWidth;
    sliderLine.style.width = width/5 * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-mini__btn-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-mini__btn-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width/9 + 'px)';

}