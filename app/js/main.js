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

    $('.icon-th-list').on('click', function () {
        $('.product-page__items > .product__item').addClass('list');
        $('.icon-th-large').removeClass('filter-active');
        $('.icon-th-list').addClass('filter-active');
    });

    $('.icon-th-large').on('click', function () {
        $('.product-page__items > .product__item').removeClass('list');
        $('.icon-th-large').addClass('filter-active');
        $('.icon-th-list').removeClass('filter-active');
    });

    $('input[type=file], select').styler();

    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
        $('.menu__btn').toggleClass('active');
    });

    $('.product-one__tabs .tab, .settings__tabs .tab, .profile__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.product-one__tabs, .settings__tabs, .profile__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product-one__tabs .tabs, .settings__tabs .tabs, .profile__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    var mixer = mixitup('.products__inner-box');

});