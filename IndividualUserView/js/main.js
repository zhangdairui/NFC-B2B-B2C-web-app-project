
$(function() {
    
    "use strict";

    //===== Prealoder

    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });


    //===== Sticky

    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 110) {
            $(".navigation").removeClass("sticky");
        } else {
            $(".navigation").addClass("sticky");
        }
    });




    //===== Mobile Menu

    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass('active');
    });

    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    var subMenu = $(".sub-menu-bar .navbar-nav .sub-menu");

    if (subMenu.length) {
        subMenu.parent('li').children('a').append(function() {
            return '<button class="sub-nav-toggler"> <i class="ti-angle-down"></i> </button>';
        });

        var subMenuToggler = $(".sub-menu-bar .navbar-nav .sub-nav-toggler");

        subMenuToggler.on('click', function() {
            $(this).parent().parent().children(".sub-menu").slideToggle();
            return false
        });

    }




    //===== faq accrodion

    if ($('.accrodion-grp').length) {
        var accrodionGrp = $('.accrodion-grp');
        accrodionGrp.each(function() {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            var accordion = Self.find('.accrodion');
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            accordion.each(function() {
                $(this).find('.accrodion-title').on('click', function() {
                    if ($(this).parent().parent().hasClass('active') === false) {
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().parent().addClass('active');
                        $(this).parent().parent().find('.accrodion-content').slideDown();
                    };


                });
            });
        });

    };




    //===== banner animation slick slider

    function mainSlider() {
        var BasicSlider = $('.hero-area');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.hero-slide:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });

        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.hero-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });

        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
            arrows: true,
            prevArrow: '<span class="prev"><i class="ti-arrow-left"></i></span>',
            nextArrow: '<span class="next"><i class="ti-arrow-right"></i></span>',
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }]
        });


        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();

    //===== feedback slide slick slider
    $('.feedback-active').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="ti-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="ti-angle-right"></i></span>',
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1600,
                settings: {
                    slidesToShow: 1,
                }
            }, {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });


    //===== SINGLE PRODUCT slide slick slider
    $('.product-single-thumb').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<span class="prev"><i class="ti-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="ti-arrow-right"></i></span>',
        fade: false,
        asNavFor: '.product-thumb'
    });
    $('.product-thumb').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-single-thumb',
        dots: false,
        centerMode: true,
        arrows: false,
        centerPadding: "0",
        focusOnSelect: true
    });


    // ===== niceSelect js
    $('select').niceSelect();



    // Single Features Active
    $('.shop-offer-area').on('mouseover', '.shop-offer-item', function() {
        $('.shop-offer-item.active').removeClass('active');
        $(this).addClass('active');
    });



    //====== Magnific Popup

    // $('.video-popup').magnificPopup({
    //     type: 'iframe'
    //     // other options
    // });


    //===== Magnific Popup

    // $('.image-popup').magnificPopup({
    //     type: 'image',
    //     gallery: {
    //         enabled: true
    //     }
    // });
    //===== Magnific Popup

    // $('.image-popup-2').magnificPopup({
    //     type: 'image',
    //     gallery: {
    //         enabled: true
    //     }
    // });

    //===== syotimer js
    // $('#simple_timer').syotimer({
    //     year: 2020,
    //     month: 7,
    //     day: 9,
    //     hour: 20,
    //     minute: 30,
    // });





    //===== Back to top

    // Show or hide the sticky footer button
    // $(window).on('scroll', function(event) {
    //     if ($(this).scrollTop() > 600) {
    //         $('.back-to-top').fadeIn(200)
    //     } else {
    //         $('.back-to-top').fadeOut(200)
    //     }
    // });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    /*---slider-range here---*/
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 560,
        values: [0, 560],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + "k - $" + ui.values[1] + "k");
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        "k - $" + $("#slider-range").slider("values", 1) + "k");



    //===== product quantity

    $('.add').click(function() {
        if ($(this).prev().val()) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.sub').click(function() {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });








    //=====
















});