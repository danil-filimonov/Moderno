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

    var mixer = mixitup('.products__inner-box');

});