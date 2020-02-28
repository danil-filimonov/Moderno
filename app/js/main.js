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

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        skin: 'round',
        prefix: '$',
        hide_min_max: true
    });

    var mixer = mixitup('.products__inner-box');

});