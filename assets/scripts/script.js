//slider-maxi

new Swiper('.slider-maxi__container', {
    direction: 'horizontal',
    loop: true,

    pagination: {
    el: '.swiper-pagination',
    clickable: true
    },

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});