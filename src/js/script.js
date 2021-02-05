// prettier-ignore
/* eslint-disable */
$(function () {
    $('.products__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
        infinite: false

    });
    $("a[href^='#']").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });

    /* $('.questions__item-title').on('click', function () {
        $('.questions__item').removeClass('questions__item--active');
        $(this).parent().addClass('questions__item--active');
    }); */

    $('.questions__item-title').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.questions__item-title').not(this).removeClass('in').next().slideUp();
    });
    $.scrollify({
        section: ".page-section",
    });
})
/* eslint-enable */
