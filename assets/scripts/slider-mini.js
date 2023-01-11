const images = document.querySelectorAll('.slider-mini__container .slider-mini__slider-line img');
const sliderLine = document.querySelector('.slider-mini__slider-line');
let count = 0;
let width;

function init() {
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
    const screenSize = window.innerWidth;
    sliderLine.style.transform = 'translate(-' + count * width/9 + 'px)';
    if (screenSize > 1180) {
		sliderLine.style.transform = 'translate(-' + count * width/7 + 'px)';
	} 
    else if (screenSize > 700) {
		sliderLine.style.transform = 'translate(-' + count * width/3 + 'px)';
	} 
    else if (screenSize > 500) {
		sliderLine.style.transform = 'translate(-' + count * width/2 + 'px)';
	}
}

