$(document).ready(function() {
    $('.projects__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        prevArrow: '.projects__arrow-left',
        nextArrow: '.projects__arrow-right',
        fade: true,
        lazyLoad: 'ondemand',
        asNavFor: '.projects__slider-nav'
    });
    $('.projects__slider-nav').slick({
        slidesToShow: 4,


        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        asNavFor: '.projects__slider',
        dots: false,
        centerMode: false,

        focusOnSelect: true,


    });
    $('.command__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        prevArrow: '.command__arrow-left',
        nextArrow: '.command__arrow-right',
        fade: true,
        lazyLoad: 'ondemand',

    });

    if (window.matchMedia("(max-width: 1200px)").matches) {
        $('.reviews__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: true,
            fade: true,
            // lazyLoad: 'ondemand',

        });
    }
});