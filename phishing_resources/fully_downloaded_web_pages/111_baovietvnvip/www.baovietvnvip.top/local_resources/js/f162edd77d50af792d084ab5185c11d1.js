/**
 * Custom js v1.0.0
 * Copyright 2017-2020
 * Licensed under  ()
 */

(function ($) {

    "use strict";

    let timer_clear;

    /* Sticky Header */
    // window.onscroll = function() {headerFunction()};
    // var header = document.getElementById("bvb-header");
    // var sticky = header.offsetTop;
    // function headerFunction() {
    //   if (window.pageYOffset > sticky) {
    //     header.classList.add("sticky");
    //   } else {
    //     header.classList.remove("sticky");
    //   }
    // }

    var menu_card_type_list_slide_page = 1;
    var menu_card_type_list_slide_on_page = 6;
    var menu_count_list_items = $("#bvb-dropdown-list-slider .item-menu").length;
    var menu_card_type_list_slide_items = parseInt("9");
    var menu_card_type_list_slide_total_page = parseInt(menu_card_type_list_slide_items / menu_card_type_list_slide_on_page) + (menu_card_type_list_slide_items % menu_card_type_list_slide_on_page == 0 ? 0 : 1);
    var menu_card_type_list_slide_width_min = 500;
    var menu_card_type_list_slide_width_contain = 0;
    var w_wins = $(window).width();

    $(document).ready(function () {
        w_wins = $(window).width();
        var mn_active_mobile = $(".bvb-service-menu .item-menu.active");
        $(".bvb-title-mobile a").text($(mn_active_mobile).text());
        //switch_menu_card_type_list();
        mn_card_type_init_slide();
        $(window).resize(function () {
            if (w_wins != $(window).width()) {
                w_wins = $(window).width();
                mn_card_type_current_slide();
            }
        });

        $(".bvb-title-mobile").click(function () {
            $("#popup-dropdown-list-header .bvb-popup-wrapper").html($(".bvb-service-menu").html());
            $("#popup-dropdown-list-header").modal();
        });

    });
    function mn_card_type_next_slide() {
        if (menu_card_type_list_slide_page < menu_card_type_list_slide_total_page) {
            menu_card_type_list_slide_page += 1;
            mn_card_type_current_slide();
        }
    }
    function mn_card_type_prev_slide() {
        if (menu_card_type_list_slide_page > 1) {
            menu_card_type_list_slide_page -= 1;
            mn_card_type_current_slide();
        }
    }
    function mn_card_type_current_slide() {
        menu_count_list_items = $("#bvb-dropdown-list-slider .item-menu").length;
        if (w_wins > 991) {
            var j_from = menu_card_type_list_slide_page * menu_card_type_list_slide_on_page - menu_card_type_list_slide_on_page;
            var j_to = j_from + menu_card_type_list_slide_on_page;
            var s_left = 0;
            var slide_width = 0;
            $("#bvb-dropdown-list-slider").css("width", menu_card_type_list_slide_width_contain);
            $("#bvb-dropdown-list-slider .item-menu").each(function (index) {
                if (index < j_from) s_left -= $(this).outerWidth();
                if (index >= j_from && index < j_to) slide_width += $(this).outerWidth();
            });
            if (s_left < -18) s_left += 18;

            if (slide_width < menu_card_type_list_slide_width_min) slide_width = menu_card_type_list_slide_width_min;
            $("#bvb-dropdown-list-card-header").css("width", slide_width + 18);
            $("#bvb-dropdown-list-slider").css("left", s_left);
            $("#bvb-dropdown-list-card-header .slide_prev").removeClass('hidden');
            if (menu_card_type_list_slide_page < menu_card_type_list_slide_total_page && menu_count_list_items > 6)
                $("#bvb-dropdown-list-card-header .slide_next").removeClass('hidden');
            else
                $("#bvb-dropdown-list-card-header .slide_next").addClass('hidden');
            if (menu_card_type_list_slide_page > 1)
                $("#bvb-dropdown-list-card-header .slide_prev").removeClass('hidden');
            else
                $("#bvb-dropdown-list-card-header .slide_prev").addClass('hidden');
            //});

        } else {
            $("#bvb-dropdown-list-slider").attr("style", "");
            $("#bvb-dropdown-list-card-header").attr("style", "");
            $("#bvb-dropdown-list-card-header .slide_next").addClass('hidden');
            $("#bvb-dropdown-list-card-header .slide_prev").addClass('hidden');
        }
    }
    function mn_card_type_init_slide() {
        if (w_wins > 991) {
            menu_card_type_list_slide_width_contain = 0;
            $("#bvb-dropdown-list-slider .item-menu").each(function (index) {
                menu_card_type_list_slide_width_contain += $(this).outerWidth();
            });
            menu_card_type_list_slide_width_contain += 200;
            $("#bvb-dropdown-list-slider").css("width", menu_card_type_list_slide_width_contain);
            mn_card_type_current_slide();
            $("#bvb-dropdown-list-card-header .slide_next").click(function () {
                mn_card_type_next_slide();
            });
            $("#bvb-dropdown-list-card-header .slide_prev").click(function () {
                mn_card_type_prev_slide();
            });
        }
    }

    $(document).ready(function () {

        $(".header-left .user").hover(function () {
            $(this).addClass('active');
        }, function () {
            $(this).removeClass('active');
        });

        /* Off Canvas Menu */
        var container = $('body');
        $('.site-menu, #off-canvas-close, .bvb-overlay').click(function () {
            if (container.hasClass('canvas-menu-open')) {
                container.removeClass('canvas-menu-open');
            } else {
                container.addClass('canvas-menu-open');
            }
        });

        /* Sub Menu */
        //let menu_item_has_children  =   $( '.off-canvas-menu .menu-item-has-children' );

        $('.off-canvas-menu .menu-item-has-children').on('click', function () {
            let icon_arrow = $(this).find('.icon-arrow');
            icon_arrow.toggleClass('icon-arrow-active');
            icon_arrow.parents('.menu-item-has-children').siblings().find('.icon-arrow').removeClass('icon-arrow-active');
            icon_arrow.parent().children('.sub-menu').slideToggle();
            icon_arrow.parents('.menu-item-has-children').siblings().find('.sub-menu').slideUp();

        });


        /* back top */
        $('#bvb-to-top').on('click', function (e) {

            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 700);

        });

        /* Dropdown Tool */
        if ($('.bvb-calculator-tool').length) {
            $(".bvb-heading-calculator-tool").on('click', function (e) {
                e.preventDefault();
                var self = $(this);
                var parent = self.closest('.bvb-calculator-tool');
                $('.bvb-heading-calculator-tool.active').not(this).removeClass('active');
                self.toggleClass('active');
                parent.toggleClass('active');
                // $(".dropdown-calculator-tool").slideToggle();
            });
        }

        if (typeof slider == 'function') {
            var slider_range1 = $("#slider-range1");
            var min1 = slider_range1.data("min");
            var max1 = slider_range1.data("max");
            var default_value1 = slider_range1.data("default");
            var step1 = slider_range1.data("step");
            $('.progress-percent1').css("width", (default_value1 - min1) / (max1 - min1) * 100 + '%');
            slider_range1.slider({
                min: min1,
                max: max1,
                value: default_value1,
                step: step1,
                animate: "slow",
                orientation: "horizontal",
                slide: function (event, ui) {
                    var value_slider = ui.value;
                    var v1 = max1 - min1;
                    var percent = (ui.value - min1) / v1 * 100;
                    $('.progress-percent1').css("width", percent + '%');
                    $(".price-label1 span.number").html(value_slider.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
                }
            });

            var slider_range2 = $("#slider-range2");
            var min2 = slider_range2.data("min");
            var max2 = slider_range2.data("max");
            var default_value2 = slider_range2.data("default");
            var step2 = slider_range2.data("step");
            $('.progress-percent2').css("width", (default_value2 - min2) / (max2 - min2) * 100 + '%');
            slider_range2.slider({
                min: min2,
                max: max2,
                value: default_value2,
                step: step2,
                animate: "slow",
                orientation: "horizontal",
                slide: function (event, ui) {
                    var value_slider2 = ui.value;
                    var v2 = max2 - min2;
                    var percent = (ui.value - min1) / v2 * 100;
                    $('.progress-percent2').css("width", percent + '%');
                    $(".price-label2 span.number").html(value_slider2.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
                }
            });

            var slider_range3 = $("#slider-range3");
            var min3 = slider_range3.data("min");
            var max3 = slider_range3.data("max");
            var default_value3 = slider_range3.data("default");
            var step3 = slider_range3.data("step");
            $('.progress-percent3').css("width", (default_value3 - min3) / (max3 - min3) * 100 + '%');
            slider_range3.slider({
                min: min3,
                max: max3,
                value: default_value3,
                step: step3,
                animate: "slow",
                orientation: "horizontal",
                slide: function (event, ui) {
                    var value_slider3 = ui.value;
                    var v3 = max3 - min3;
                    var percent = (ui.value - min3) / v3 * 100;
                    $('.progress-percent3').css("width", percent + '%');
                    $(".price-label3 span.number").html(value_slider3);
                }
            });
        }



        /* Select2 */
        if (typeof $.fn.select2 === 'function') {
            if ($('.bvb-select2').length) {
                $('.bvb-select2').select2({
                    placeholder: "Select a Program",
                    dropdownCssClass: 'bvb-select-2-wsearch'
                });
            }
            if ($('.bvb-select2-map').length) {
                $('.bvb-select2-map').select2({
                    placeholder: "Select a Program",
                    dropdownCssClass: 'bvb-select-2-wsearch'
                });
            }
        }



        /* Start Carousel */
        setTimeout(function () {

            $(".bvb-owl-carousel-banner").each(function () {
                var slider = $(this);
                var defaults = {
                    direction: $('body').hasClass('rtl') ? 'rtl' : 'ltr'
                };
                // Initialize Slider
                // Config ở file JConfigBanner
                slider.owlCarousel(configBannerHome).addClass("owl-carousel-init");
            });

            $(".bvb-owl-carousel-banner-service1").each(function () {
                var slider = $(this);
                var defaults = {
                    direction: $('body').hasClass('rtl') ? 'rtl' : 'ltr'
                };
                // Initialize Slider
                slider.owlCarousel({
                    loop: false,
                    autoplay: true,
                    items: 1,
                    margin: 0,
                    nav: false,
                    dots: true,
                    navText: ['<i class="far fa-long-arrow-left"></i>', '<i class="far fa-long-arrow-right"></i>'],
                }).addClass("owl-carousel-init");
            });

            $(".bvb-owl-carousel-banner-service").each(function () {
                var slider = $(this);
                var defaults = {
                    direction: $('body').hasClass('rtl') ? 'rtl' : 'ltr'
                };
                // Initialize Slider
                // Config ở file JConfigBanner
                slider.owlCarousel(configBannerService).addClass("owl-carousel-init");
            });

            $(".bvb-owl-carousel-service").each(function () {
                var slider = $(this);
                var defaults = {
                    direction: $('body').hasClass('rtl') ? 'rtl' : 'ltr'
                };
                var config = $.extend({}, defaults, slider.data("plugin-options"));
                slider.addClass("owl-carousel owl-them");
                // Initialize Slider
                slider.owlCarousel({
                    loop: false,
                    margin: 0,
                    nav: true,
                    dots: false,
                    mouseDrag: false,
                    navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        421: {
                            items: 2
                        },
                        576: {
                            items: 3
                        },
                        768: {
                            items: 4
                        },
                        992: {
                            items: 5
                        },
                        1200: {
                            items: 6
                        }
                    }
                }).addClass("owl-carousel-init");
            });

            $(".bvb-owl-carousel-megamenu").each(function () {
                var slider = $(this);
                var defaults = {
                    direction: $('body').hasClass('rtl') ? 'rtl' : 'ltr'
                };
                var config = $.extend({}, defaults, slider.data("plugin-options"));
                slider.addClass("owl-carousel owl-them");
                // Initialize Slider
                slider.owlCarousel({
                    loop: false,
                    margin: 0,
                    nav: true,
                    dots: false,
                    mouseDrag: false,
                    navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        481: {
                            items: 2
                        },
                        691: {
                            items: 3
                        },
                        901: {
                            items: 4
                        },
                        1199: {
                            items: 4
                        }
                    }
                }).addClass("owl-carousel-init");

                // $(".bvb-mega-menu .owl-nav button").click(function(){
                //     var obj = $(".bvb-mega-menu .owl-stage-outer");
                //     var childPos = obj.position();
                //     var parentPos = $(".bvb-mega-menu .owl-stage").position();
                //     var item_width = $(".menu-item").outerWidth();
                //     var parentOffset = parentPos.left;
                //     var left = - parentOffset;
                //     if (parentOffset < 0) {
                //         left = - parentOffset;
                //     } else if (parentOffset > 0) {
                //         left = - parentOffset;
                //     }
                //     // console.log(childOffset);
                //     $(".bvb-mega-menu .mega-sub-menu").css("left", left + item_width);
                // });
                $(".bvb-mega-menu .owl-nav .owl-next").click(function () {
                    var obj = $(".bvb-mega-menu .owl-stage-outer");
                    var childPos = obj.position();
                    var parentPos = $(".bvb-mega-menu .owl-stage").position();
                    var item_width = $(".menu-item").outerWidth();
                    var childOffset = childPos.left - parentPos.left;
                    // console.log(childOffset);
                    $(".bvb-mega-menu .mega-sub-menu").css("left", childOffset + item_width - 32);
                });
                $(".bvb-mega-menu .owl-nav .owl-prev").click(function () {
                    var obj = $(".bvb-mega-menu .owl-stage-outer");
                    var childPos = obj.position();
                    var parentPos = $(".bvb-mega-menu .owl-stage").position();
                    var item_width = $(".menu-item").outerWidth();
                    var childOffset = childPos.left - parentPos.left;
                    var left = childOffset;
                    console.log(left);
                    if (childOffset > 0) {
                        $(".bvb-mega-menu .mega-sub-menu").css("left", left - item_width + 32);
                    } else if (childOffset > 0) {
                        $(".bvb-mega-menu .mega-sub-menu").css("left", '0');
                    }
                    // console.log(childOffset);
                });
            });

            if (w_wins > 1200) {
                $(".bvb-owl-carousel-service-items").each(function () {
                    var slider = $(this);
                    var defaults = {
                        direction: $('body').hasClass('rtl') ? 'rtl' : 'ltr'
                    };
                    var config = $.extend({}, defaults, slider.data("plugin-options"));
                    slider.addClass("owl-carousel owl-them");
                    // Initialize Slider
                    slider.owlCarousel({
                        loop: false,
                        margin: 30,
                        nav: true,
                        dots: false,
                        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
                        responsive: {
                            0: {
                                items: 1
                            },
                            575: {
                                items: 2
                            },
                            767: {
                                items: 3
                            },
                            1199: {
                                items: 4
                            },
                            1200: {
                                items: 4
                            }
                        }
                    }).addClass("owl-carousel-init");
                });
            }

            $(".bvb-owl-carousel-news").each(function () {
                var slider = $(this);
                var defaults = {
                    direction: $('body').hasClass('rtl') ? 'rtl' : 'ltr'
                };
                var config = $.extend({}, defaults, slider.data("plugin-options"));
                slider.addClass("owl-carousel owl-them");
                // Initialize Slider
                slider.owlCarousel({
                    loop: true,
                    autoplay: true,
                    margin: 30,
                    nav: true,
                    dots: false,
                    navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            autoplay: false,
                        },
                        576: {
                            items: 2,
                            autoplay: false,
                        },
                        767: {
                            items: 2,
                            autoplay: false,
                        },
                        992: {
                            items: 3,
                            autoplay: false,
                        },
                        1025: {
                            items: 3,
                            autoplay: true,
                        }
                    }
                }).addClass("owl-carousel-init");
            });

            $(".bvb-owl-bvb-service-menu").each(function () {
                var slider = $(this);
                var defaults = {
                    direction: $('body').hasClass('rtl') ? 'rtl' : 'ltr'
                };
                var config = $.extend({}, defaults, slider.data("plugin-options"));
                slider.addClass("owl-carousel owl-them");
                // Initialize Slider
                slider.owlCarousel({
                    loop: false,
                    margin: 0,
                    nav: true,
                    dots: false,
                    navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
                    responsive: {
                        0: {
                            items: 2
                        },
                        600: {
                            items: 3
                        },
                        992: {
                            items: 4
                        },
                        1200: {
                            items: 5
                        }
                    }
                }).addClass("owl-carousel-init");
            });

            $(".bvb-owl-related").each(function () {
                var slider = $(this);
                var defaults = {
                    direction: $('body').hasClass('rtl') ? 'rtl' : 'ltr'
                };
                var config = $.extend({}, defaults, slider.data("plugin-options"));
                slider.addClass("owl-carousel owl-them");
                // Initialize Slider
                slider.owlCarousel({
                    loop: false,
                    margin: 30,
                    nav: true,
                    dots: false,
                    navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1200: {
                            items: 3
                        }
                    }
                }).addClass("owl-carousel-init");
            });

            $(".bvb-owl-timeline").each(function () {
                var slider = $(this);
                var defaults = {
                    direction: $('body').hasClass('rtl') ? 'rtl' : 'ltr'
                };
                var config = $.extend({}, defaults, slider.data("plugin-options"));
                slider.addClass("owl-carousel owl-them");
                // Initialize Slider
                slider.owlCarousel({
                    loop: false,
                    margin: 30,
                    nav: true,
                    dots: false,
                    navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1200: {
                            items: 3
                        }
                    }
                }).addClass("owl-carousel-init");
            });

            $(".bvb-owl-featured-news").each(function () {
                var slider = $(this);
                var defaults = {
                    direction: $('body').hasClass('rtl') ? 'rtl' : 'ltr'
                };
                var config = $.extend({}, defaults, slider.data("plugin-options"));
                slider.addClass("owl-carousel owl-them");
                // Initialize Slider
                slider.owlCarousel({
                    loop: false,
                    items: 1,
                    margin: 0,
                    nav: true,
                    dots: false,
                    navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
                }).addClass("owl-carousel-init");
            });

            if ($('.list-items-info').length) {
                $(".list-items-info .item").each(function () {
                    var self = $(this);
                    var parent = self.closest('.list-items-info');
                    var desc = self.find('.desc');
                    var show_more = self.find('.bvb-show-more-detail');
                    var show_less = self.find('.bvb-show-less-detail');
                    var h_desc = desc.outerHeight();
                    if (h_desc > 120) {
                        self.find(".bvb-show-more-detail").css("display", 'inline-block');
                        desc.css("-webkit-line-clamp", '5');
                    }
                    show_more.click(function () {
                        self.addClass("active");
                        desc.css("-webkit-line-clamp", 'inherit');
                    });
                    show_less.click(function () {
                        self.removeClass("active");
                        desc.css("-webkit-line-clamp", '5');
                    });
                });
            }

            $(".bvb-timeline .owl-item").each(function () {
                var self = $(this);
                var parent = self.closest('.bvb-timeline');
                var desc = self.find('.desc');
                var h = desc.outerHeight();
                if (h > 190) {
                    self.find(".bvb-show-more").css("display", 'block');
                    desc.css("max-height", '118px');
                }
            });
        }, 0);
        /* End Carousel */
        if ($('.bvb-mega-menu').length) {
            $(".bvb-mega-menu-inner .menu-item-has-children").hover(function (e) {
                e.preventDefault();
                var self = $(this);
                var parent = self.closest('.bvb-mega-menu-inner');
                parent.toggleClass("overflow-hidden");
                $('body').toggleClass('megamenu-overlay');
            });
        }

        /* Show Less / Show More */
        $(".bvb-show-more").click(function () {
            $('.bvb-timeline .desc').removeClass("active");
            $(this).parent().addClass("active");

        });
        $(".bvb-show-less").click(function () {
            $(this).parent().removeClass("active");
        });
        /* End Show Less / Show More */

        if ($('.bvb-mega-menu-sticky').length) {
            $(".bvb-mega-menu-sticky").stickThis({
                top: 80,
                fixedClass: 'sticky',
                zindex: 9999
            });
        }

        /* so sanh */
        if ($('.bvb-compare-sticky').length) {
            $(".bvb-compare-sticky").stickThis({
                top: 80,
                fixedClass: 'sticky',
                zindex: 9999
            });
        }
        //if ($('.bvb-check-box-compare').length) {
        //    $('input[type="checkbox"]').on('change', function (e) {
        //        if (e.target.checked) {
        //            $('#bvb-compare-modal').modal();
        //        }
        //    });
        //}

        /* datepicker */
        if ($('#bvb-datepicker').length) {
            $('#bvb-datepicker .input-group.date > input').datepicker({
                dateFormat: 'dd/mm/yy'
            })
        }

        /* fancybox imgaes */
        if ($('.bvb-media-items').length) {
            $('.fancybox-thumb').fancybox({
                thumbs: {
                    autoStart: true,
                }
            });
        }
        // Detection Ipad
        var isiPad = navigator.userAgent.match(/iPad/i) != null;
        if (isiPad) {
            $(".bvb-mega-menu").addClass('megamenu-hidden');
            $(".off-canvas-menu").addClass('off-canvas-menu-tablet');
        }

        //Scrollbar.initAll();
    });

})(jQuery);