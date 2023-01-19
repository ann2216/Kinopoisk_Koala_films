// слайдер на 1-й странице, последний на странице collections, слайдер на странице film card
let images = document.querySelectorAll('.slider-mini__container .slider-mini__slider-line img');
let sliderLine = document.querySelector('.slider-mini__slider-line');
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

// // слайдер films на странице collections
let imagesCollections = document.querySelectorAll('.slider-mini-collections__container .slider-mini-collections__slider-line img');
let sliderLineCollections = document.querySelector('.slider-mini-collections__slider-line');


function init1() {
    width = document.querySelector('.slider-mini-collections__container').offsetWidth;
    sliderLineCollections.style.width = width/5 * imagesCollections.length + 'px';
    imagesCollections.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider1();
}

init1();
window.addEventListener('resize', init1);

document.querySelector('.slider-mini-collections__btn-next').addEventListener('click', function () {
    count++;
    if (count >= imagesCollections.length) {
        count = 0;
    }
    rollSlider1();
});

document.querySelector('.slider-mini-collections__btn-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = imagesCollections.length - 1;
    }
    rollSlider1();
});

function rollSlider1() {
    const screenSize = window.innerWidth;
    sliderLineCollections.style.transform = 'translate(-' + count * width/9 + 'px)';
    if (screenSize > 1180) {
		sliderLineCollections.style.transform = 'translate(-' + count * width/7 + 'px)';
	} 
    else if (screenSize > 700) {
		sliderLineCollections.style.transform = 'translate(-' + count * width/3 + 'px)';
	} 
    else if (screenSize > 500) {
		sliderLineCollections.style.transform = 'translate(-' + count * width/2 + 'px)';
	}
}

// // слайдер series на странице collections
let imagesSeries = document.querySelectorAll('.slider-mini-series__container .slider-mini-series__slider-line img');
let sliderLineSeries = document.querySelector('.slider-mini-series__slider-line');


function init2() {
    width = document.querySelector('.slider-mini-series__container').offsetWidth;
    sliderLineSeries.style.width = width/5 * imagesSeries.length + 'px';
    imagesSeries.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider1();
}

init2();
window.addEventListener('resize', init2);

document.querySelector('.slider-mini-series__btn-next').addEventListener('click', function () {
    count++;
    if (count >= imagesSeries.length) {
        count = 0;
    }
    rollSlider2();
});

document.querySelector('.slider-mini-series__btn-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = imagesSeries.length - 1;
    }
    rollSlider2();
});

function rollSlider2() {
    const screenSize = window.innerWidth;
    sliderLineSeries.style.transform = 'translate(-' + count * width/9 + 'px)';
    if (screenSize > 1180) {
		sliderLineSeries.style.transform = 'translate(-' + count * width/7 + 'px)';
	} 
    else if (screenSize > 700) {
		sliderLineSeries.style.transform = 'translate(-' + count * width/3 + 'px)';
	} 
    else if (screenSize > 500) {
		sliderLineSeries.style.transform = 'translate(-' + count * width/2 + 'px)';
	}
}
