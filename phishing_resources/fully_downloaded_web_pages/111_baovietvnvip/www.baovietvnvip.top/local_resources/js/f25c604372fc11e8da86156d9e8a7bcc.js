jQuery(document).ready(function () {
    jQuery(window).scroll(function(){
        if(jQuery(this).scrollTop()>100){
            jQuery('.tg_fixed_header').addClass('fixed_header');
        }
        else{
            jQuery('.tg_fixed_header').removeClass('fixed_header');
        }
    });
    // POPUP CARD
    jQuery('.credit_condition .bt_popup_card').click(function () {
        jQuery('.popup_card').modal('show');
    });

    // SHOW LIST UL
    jQuery('.click-ul-tog-hd').click(function (e) {
        jQuery(this).find('.ul-tog-hd').slideToggle(300).click(function (e_ul) {
            e_ul.stopPropagation();
        });
        jQuery('.click-ul-tog-hd').not(this).find('.ul-tog-hd').hide();
    });

    jQuery(document).click(function (event) {
        //if you click on anything except the modal itself or the "open modal" link, close the modal
        if (!jQuery(event.target).closest(".search_hd i.fa, .search_hidden , .click-ul-tog-hd").length) {
            jQuery("body").find(".search_hidden").hide();
            jQuery("body").find(".ul-tog-hd").hide();
        }
        //if you click on anything except the modal itself or the "open modal" link, close the modal
    });

    jQuery('.search_hd>i.fa-search').click(function () {
        jQuery('.search_hidden').show();
    });

    jQuery('.botton_line').click(function (e) {
        jQuery(this).find('.expand').slideToggle();
        jQuery('.botton_line').not(this).find('.expand').slideUp();
        jQuery(this).find('.arrup').toggle();
        jQuery(this).find('.arrdown').toggle();
        jQuery(this).siblings().find('.arrup').hide().siblings('.arrdown').show();
        //jQuery(this).find('.arrup').slideToggle();
    });

    //tab-content popup
    jQuery(document).on('click', 'ul.tabs_card_hd li' ,function () {
        var tab_id = jQuery(this).attr('data-tab');
        jQuery('ul.tabs_card_hd li').removeClass('current');
        jQuery('.tab-content-pop').removeClass('current');
        jQuery(this).addClass('current');
        jQuery("#" + tab_id).addClass('current');
    })

    jQuery('.nav_primary ul li').has('.sub-menu').addClass('menu-item-has-children');
    jQuery('.icon_click_searchmb').click(function () {
        jQuery(this).siblings('.search_hidden_mb').toggle(300);
    });

    jQuery('.search_hidden_mb i.fa-times')
    jQuery('.icon_mobile_click').click(function () {
        jQuery('#menu_mobile_full').slideToggle(300);
    });
    jQuery('.mobile-menu ul.menu').children().has('ul.sub-menu').addClass('menu-item-has-children');
    // menu cap 2
    jQuery('.mobile-menu ul.menu').children().has('ul.sub-menu').click(function () {
        jQuery(this).children('ul').slideToggle();
        jQuery(this).siblings().has('ul.sub-menu').find('ul.sub-menu').slideUp();
        jQuery(this).siblings().find('ul.sub-menu>li').has('ul.sub-menu').removeClass('editBefore_mobile');
    }).children('ul').children().click(function (event) {
        event.stopPropagation();
    });

    if (jQuery("ul.furniture_slide").length) {
        jQuery('ul.furniture_slide').slick({
            speed: 220,
            slidesToShow: 8,
            autoplay: true,
            dots: true,
            arrows: false,
            autoplaySpeed: 2200,
            // fade: true,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        dots: true,
                        autoplay: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        dots: true,
                        autoplay: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        dots: true,
                        autoplay: true,
                        arrows: false
                    }
                }
            ]
        });
    }
    if (jQuery("ul.slide_product_electric").length) {
        jQuery('ul.slide_product_electric').slick({
            speed: 220,
            slidesToShow: 8,
            autoplay: true,
            dots: true,
            arrows: false,
            autoplaySpeed: 2200,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        dots: true,
                        autoplay: true,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        dots: true,
                        arrows: false,
                        autoplay: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        dots: true,
                        arrows: false,
                        autoplay: true,
                    }
                }
            ]
        });
    }
    if (jQuery("ul.slide_product_furniture").length) {
        jQuery('ul.slide_product_furniture').slick({
            speed: 220,
            slidesToShow: 8,
            autoplay: true,
            dots: true,
            arrows: false,
            autoplaySpeed: 2200,
            // fade: true,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        dots: false,
                        autoplay: true,
                        arrows: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        dots: false,
                        autoplay: true,
                        arrows: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        dots: false,
                        autoplay: true,
                        arrows: true,
                    }
                }
            ]
        });
    }
    // if (jQuery(".receive_jacss ul").length) {
    //     jQuery('.receive_jacss ul').slick({
    //         speed: 300,
    //         slidesToShow: 4,
    //         autoplay: true,
    //         dots: true,
    //         arrows: true,
    //         autoplaySpeed: 3000,
    //         // fade: true,
    //         cssEase: 'linear',
    //         responsive: [
    //             {
    //                 breakpoint: 1024,
    //                 settings: {
    //                     slidesToShow: 4,
    //                     dots: true,
    //                     arrows: true,
    //                 }
    //             },
    //             {
    //                 breakpoint: 600,
    //                 settings: {
    //                     slidesToShow: 3,
    //                     dots: true,
    //                     arrows: true,
    //                 }
    //             },
    //             {
    //                 breakpoint: 480,
    //                 settings: {
    //                     slidesToShow: 2,
    //                     dots: true,
    //                     arrows: true,
    //                 }
    //             }
    //         ]
    //     });
    // }
    // if (jQuery('ul.menu_support_mb').length) {
    //     jQuery('ul.menu_support_mb').slick({
    //         slidesToShow: 1,
    //         dots: true,
    //         arrows: false,
    //         autoplaySpeed: 3000,
    //         // fade: true,
    //         cssEase: 'linear',
    //         responsive: [
    //             {
    //                 breakpoint: 1024,
    //                 settings: {
    //                     slidesToShow: 4,
    //                     dots: false,
    //                     autoplay: false,
    //                     arrows: true,
    //                 }
    //             },
    //             {
    //                 breakpoint: 600,
    //                 settings: {
    //                     slidesToShow: 4,
    //                     dots: false,
    //                     arrows: false,
    //                     autoplay: false,
    //                     arrows: true,
    //                 }
    //             },
    //             {
    //                 breakpoint: 480,
    //                 settings: {
    //                     slidesToShow: 3,
    //                     dots: false,
    //                     arrows: false,
    //                     autoplay: false,
    //                     arrows: true,
    //                 }
    //             }
    //         ]
    //     });
    // }
});
// end document
var CF7_no_double_submit = {
    preventDoubleSubmit: function () {
        /**
         * Ensure run scripts only when contact form 7 is available and their AJAX enable
         */
        if (typeof wpcf7 !== 'undefined' && wpcf7 !== null && wpcf7) {

            window.oldFormData = window.FormData;
            /**
             * If event comes here that means CF7 doesn't submit form via ajax so we need to prevent form being submitted
             */
            $('.wpcf7-form').bind('submit', function (e) {
                if (typeof window.FormData === 'function' || typeof window.FormData === 'boolean') {
                    e.preventDefault();
                }
            });

            /**
             * Set flag before submit form
             */
            $('.wpcf7').bind('wpcf7beforesubmit', function (e) {
                window.FormData = true;
            });

            /**
             * Revert flag after form submitted
             */
            $('.wpcf7').bind('wpcf7submit', function (e) {
                window.FormData = window.oldFormData;
            });

        }
    }
};
$(document).ready(function () {
    CF7_no_double_submit.preventDoubleSubmit();
});