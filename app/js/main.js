$(function () {

    $('.rate-stars').rateYo({
        rating: 5,
        starWidth: "12px",
        ratedFill: '#FFA726',
        readOnly: true
    });

    $('.products__slider-inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4
    });

    $('.js-range-slider').ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        skin: 'round',
        prefix: '$',
        hide_min_max: true
    });

    $('.icon-th-list').on('click', function(){
        $('.product-page__items > .product__item').addClass('list');
        $('.icon-th-large').removeClass('filter-active');
        $('.icon-th-list').addClass('filter-active');
    });

    $('.icon-th-large').on('click', function(){
        $('.product-page__items > .product__item').removeClass('list');
        $('.icon-th-large').addClass('filter-active');
        $('.icon-th-list').removeClass('filter-active');
    });

    var mixer = mixitup('.products__inner-box');

});