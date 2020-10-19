$(document).ready(function(){
    $('.catalog__slider').slick({
        autoplay: true,
        dots: true,
    });
    $('.brands__slider').slick({
        slidesToShow: 6,
    });
    $('.slide__list').slick({
        slidesToShow: 4,
    });
    $('.slider-hit__list').slick({

    });
    $('.profit-slider__list').slick({
        slidesToShow: 4,
    });
    $('.big-slide__list').slick({
        slidesToShow: 5,
        rows: 2
    });
});