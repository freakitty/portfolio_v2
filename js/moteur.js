$(function () {
    "use strict";
    /* ============================== 
    SLIDE PAGE 
    ========================== */

    function animateHamburger() {
        $('#hamburger-button').toggleClass('open');
    }

    function slideMenu() {
        $('.navbar').toggleClass('open');
    }

    $('#hamburger-button').click(function () {
        animateHamburger();
        slideMenu();
    });

    // sub : H router
    function getH() {
        return window.location.hash;
    }

    function setH(h) {
        window.location.hash = h;
    }

    function tweenreset() {
        TweenMax.to('#about', 0.7, {
            left: '-100%'
        });
        TweenMax.to('#contact', 0.9, {
            top: '-250%'
        });
    }
    // HIGHLY EXPERIMENTAL
    //    function toAbout() {
    //        tweenreset();
    //        TweenMax.to('#about', 0.7, {left: 0});
    //    };
    function toContact() {
        TweenMax.to('#contact', 0.7, {
            top: 0
        });
    }

    function toView(route) {
        switch (route) {
            case '#contact':
                setH(route);
                toContact();
                break;
            default:
                tweenreset();
                setH('');
        }
    }


    window.addEventListener("hashchange", console.log('test'));
    $("#contact-button, #burger-contact").on('click', function () {
        if ($('#contact').offset().top < 0) {
            tweenreset();
            toView('#contact');
            $('.navbar').removeClass('open');
            $('#hamburger-button').removeClass('open');
            $('.logo').attr('src', 'images/freakitty-black.svg');
            $("#hamburger-button>span").css('background-color', '#ffffff');
            $('.bottom-name').css('color', '#464646');
            $('.button-work').css('display', 'block');
            $('.desktop-menu span').css('color', '#ffffff');
            $('.wrapper').css('overflow', 'hidden');
        } else {
            //toView('home');
            TweenMax.to('#contact', 0.9, {
                top: '-250%'
            });
            $("#hamburger-button>span").css('background-color', '#ffffff');
            $('.bottom-name').css('color', '#464646');
            $('.wrapper').css('overflow', 'hidden');
            $('.button-work').css('display', 'none');
            $('.desktop-menu span').css('color', '#5CF6C3');
            $('.wrapper').css('overflow', 'scroll');
            
        }
    });

    $("#hamburger-button").on('click', function () {
        if ($('#contact').offset().top === 0 && !$('#hamburger-button').hasClass('open')) {
            $('.logo').attr('src', 'images/freakitty-black.svg');
            $("#hamburger-button>span").css('background-color', '#ffffff');
        }
    });

    $("#hamburger-button").on('click', function () {
        if ($('body').hasClass('whitebg') && $('#hamburger-button').hasClass('open')) {
            $("#hamburger-button>span").css('background-color', '#5CF6C3');
        }
    });

    $("#about-button,#burger-about").on('click', function () {
        if ($('#about').offset().left < 0) {
            TweenMax.to('#about', 0.7, {
                left: 0
            });
            TweenMax.to('#contact', 0.9, {
                top: '-250%'
            });
            $(window).remove('open');
            $('.navbar').removeClass('open');
            $('#hamburger-button').removeClass('open');
            $('.logo').attr('src', 'images/freakitty-white.svg');
            $('.bottom-name').css('color', '#CECECE');
            $("#hamburger-button>span").css('background-color', '#5CF6C3');
            $('.wrapper').css('overflow', 'hidden');
            $('.button-work').css('display', 'block');
            $('.desktop-menu span').css('color', '#5CF6C3');
            $('.wrapper').css('overflow', 'hidden');
        } else {
            //$('#about').offset().left > 0;
            TweenMax.to('#about', 0.7, {
                left: '-100%'
            });
            $('.button-work').css('display', 'none');
            $('.wrapper').css('overflow', 'scroll');

        }
    });

    $("#about-button,#burger-about").on('click', function () {
        if ($('body').hasClass('whitebg')) {
            $('.logo').attr('src', 'images/freakitty-black.svg');
        }
    });


    function toAbout() {
        tweenreset();
        TweenMax.to('#about', 0.7, {
            left: 0
        });
    }

    /* ======================================= 
    KEYDOWN 
    =============================== */
    var show = ['Hello', 'there', '!', '<br>', "I am", 'Cindy', 'Castano,', '<br>', 'an', "UI Designer", '&', "Graphic", "designer", 'based', 'in', 'Paris.', "I'm", 'passionate', 'about', 'print,', "design,", 'and', 'digital.', 'I', 'like', 'to', "mix", 'both', 'to', 'create', 'solutions', 'that', 'add', 'value.', '<br>', "Let's", 'get', 'in', 'touch', 'for', 'any', 'project', 'inquiries', '<br>', '>>', '<a href="mailto:hello@freakitty.cc" style="color:#5CF6C3">Just drop me a line</a>', '.'],
        i = 0,
        updateHey = function () {
            if (i < show.length) {
                document.getElementById('hey').innerHTML += show[i] + ' ';
                i += 1;
            }
        };

    $(document).bind('keydown', function (event) {
        $('.placeholder').css('display', 'none');
        $('#hey').css('display', 'block');
        updateHey();
    });

    /* ======================================= 
    PROJECT MOCKUP ANIMATION 
    =============================== */

    $(window).scroll(function () {
        $(".anim .card").each(function () {
            const position = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scroll > position - windowHeight) {
                $(this).addClass("active");
            }
            if (scroll < 100) {
                $(this).removeClass("active");
            }
        });
    });

    var mq = window.matchMedia("(max-width: 800px)");

    if (mq.matches) {
        $('.anim').toggleClass('wrapp');
    }

    /* ======================================= 
    RADIO BUTTON SWITCH 
    =============================== */

    $(".radio_button").on('click', function () {
        if ($('body').hasClass('blackbg')) {
            $('body').removeClass('blackbg');
            $('body').addClass('whitebg');
            $('.logo').attr('src', 'images/freakitty-black.svg');
            $('.bottom-name').css('color', '#464646');
            $('h1').css('color', '#464646');
            $('.bg-lines').attr('src', 'images/lines-whitebg.svg');
            $('.radio_button').attr('src', 'images/radio_button-black-checked.svg');
            $('.navbar').css('background-color', '#ffffff');
            $('#about').css('background-color', '#ffffff');
            $('.title-project').css('color', '#464646');
            $('.personnal-project').css('color', '#CECECE');
            $('.green_lines-animation>span').css('background-color', '#5CF6C3');
            $('.caption').css('color', '#CECECE');
            $('.bg-lines-desktop').attr('src', 'images/lines-whitebg-desktop.svg');
            $('.logo_desktop').attr('src', 'images/freakitty-black.svg');
            $('.scroll_icon').attr('src', 'images/scroll-black.svg');
             $('.home-name').attr('src', 'images/home_name-whiteBG.svg');
        } else {
            $('.radio_button').attr('src', 'images/radio_button-white-unchecked.svg');
            $('body').removeClass('whitebg');
            $('body').addClass('blackbg');
            $('.logo').attr('src', 'images/freakitty-white.svg');
            $('.bg-lines').attr('src', 'images/lines-blackbg.svg');
            $('h1').css('color', '#CECECE');
            $('.bottom-name').css('color', '#CECECE');
            $('.navbar').css('background-color', '#181818');
            $('#about').css('background-color', '#181818');
            $('.green_lines-animation>span').css('background-color', '#53756A');
            $('.title-project').css('color', '#ffffff');
            $('.personnal-project').css('color', '#6B6B6B');
            $('.caption').css('color', '#636363');
            $('.bg-lines-desktop').attr('src', 'images/lines-blackbg-desktop.svg');
            $('.logo_desktop').attr('src', 'images/freakitty-white.svg');
            $('.scroll_icon').attr('src', 'images/scroll-white.svg');
            $('.home-name').attr('src', 'images/home_name-blackBG.svg');
        }
    });

    /* ============================= 
    AFFORDANCE
    ================================ */

    $(window).scroll(function () {
        $(".scroll").css("opacity", 1 - $(window).scrollTop() / 250);
    });


    toView(getH());
});
