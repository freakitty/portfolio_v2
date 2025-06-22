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
            $('#home-button').removeClass('focus');
            $('#work-button').removeClass('focus');
            $('#about-button').removeClass('focus');
            $('#contact-button').addClass('focus');
            $('.bottom-name').css('color', '#464646');
            $('.wrapper').css('overflow', 'hidden');
        } else {
            //toView('home');
            TweenMax.to('#contact', 0.9, {
                top: '-250%'
            });
            $('.bottom-name').css('color', '#464646');
            $('.wrapper').css('overflow', 'hidden');
            $('#contact-button').removeClass('focus');
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
            $('#home-button').removeClass('focus');
            $('#contact-button').removeClass('focus');
            $('#work-button').removeClass('focus');
            $('#about-button').addClass('focus');
            $('#hamburger-button').removeClass('open');
            $('.bottom-name').css('color', '#CECECE');
            $("#hamburger-button>span").css('background-color', '#5CF6C3');
            $('.wrapper').css('overflow', 'hidden');
            $('.wrapper').css('overflow', 'hidden');
        } else {
            //$('#about').offset().left > 0;
            TweenMax.to('#about', 0.7, {
                left: '-100%'
            });
            $('.wrapper').css('overflow', 'scroll');
            $('#about-button').removeClass('focus');
        }
    });
 
    function toAbout() {
        tweenreset();
        TweenMax.to('#about', 0.7, {
            left: 0
        });
    }

   $("#home-button,#burger-home").on('click', function () {
        tweenreset();
    });
 
    /* ======================================= 
                KEYDOWN 
    ========================================== */
    var show = ['Hello', 'there', '!', '<br>', "I am", 'Cindy', 'Castano,', '<br>', 'an', "UI Designer", '&', "Graphic", "designer", 'based', 'in', 'Paris.', '<br>', 'Passionate', 'about', 'visual', "design", 'and', 'user', "experience,", '<br>', 'I', 'combine', 'creativity', "and", 'technical', 'expertise', 'to', 'bring', 'intuitive', 'and', 'aesthetic', 'interfaces', 'to', 'life.', '<br>', "Let's", 'get', 'in', 'touch', 'for', 'any', 'project', 'inquiries', '<br>', '>>', '<a href="mailto:hello@freakitty.cc" style="color:#5CF6C3">Just drop me a line</a>', '.'],
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
                WORK PREVIEW
    ========================================== */

    $('#1, #2, #3, #4, #5, #6, #7, #8, #9, #10, #11').hover(
        function() {
         console.log(); $('.box'+$(this).attr('id')).toggleClass('hide show');
      });

    /* ======================================= 
                RADIO BUTTON SWITCH 
    ========================================== */
    
    function darkmodeon(){ 
        $('body').removeClass('whitebg');
        $('body').addClass('blackbg');
        $('.off_svg').css('display', 'none');
        $('.on_svg').css('display', 'block');
        $('h1').css('color', '#C7F8E8');
        $('h2').css('color', '#EEF7F4');
        $('h4').css('color', '#C7F8E8');
        $('.home_text').css('color', '#C7F8E8');
        $('.desktop-menu').css('color', '#EEF7F4');
        $('.tableLabel').css('color', '#EEF7F4');
        $('.smallcaps_Text').css('color', '#EEF7F4');
        $('.ListItem_title').css('color', '#EEF7F4');
        $('.chip_small, .chip ').css('color', '#38C395');
        $('a').css('color', '#EEF7F4');
        $('.focus').css('color', '#38C395');
        $('.text_about').css('color', '#38C395');
        $('.highlight').css('color', '#5CF6C3');
        $('.bottom-name').css('color', '#848484');
        $('.navbar').css('background-color', '#181818');
        $('#about, #contact').css('background-color', '#181818');
        $('.link').css('color', '#CECECE');
        $('.logo_desktop').attr('src', 'images/logo-animation-black.gif');
        $('.tinyclues').attr('src', 'images/clients/white/tinyclues-logo%201.png');
        $('.quitoque').attr('src', 'images/clients/white/Logotype_Quitoque_RVB_blanc%201.png');
        $('.dii').attr('src', 'images/clients/white/Dii_Logo.png');
        $('.wm').attr('src', 'images/clients/white/wm-logo-white%201.png');
        $('.activation').attr('src', 'images/clients/white/logo-venise-activation-white%201.png');
        $('.beycome').attr('src', 'images/clients/white/Logo%20Beycome.png');
        $('.etage').attr('src', 'images/clients/white/3E-LOGO-white.png');
        $('.logick').attr('src', 'images/clients/white/logo-logick-blanc.png');
    }
    function lightmodeon(){
        $('body').removeClass('blackbg');
        $('body').addClass('whitebg');
        $('.off_svg').css('display', 'block');
        $('.on_svg').css('display', 'none');
        $('.bottom-name').css('color', '#464646');
        $('h1').css('color', '#464646');
        $('h2').css('color', '#464646');
        $('h4').css('color', '#464646');
        $('.tableLabel').css('color', '#464646');
        $('.smallcaps_Text').css('color', '#464646');
        $('.ListItem_title').css('color', '#464646');
        $('.home_text').css('color', '#464646');
        $('.desktop-menu').css('color', '#464646');
        $('.chip_small, .chip ').css('color', '#244E40');
        $('a').css('color', '#464646');
        $('.focus').css('color', '#38C395');
        $('.text_about').css('color', '#464646');
        $('.highlight').css('color', '#388169');
        $('.navbar').css('background-color', '#EEF7F4');
        $('#about, #contact').css('background-color', '#EEF7F4');
        $('.link').css('color', '#464646');
        $('.logo_desktop').attr('src', 'images/logo-animation-white.gif');
        $('.tinyclues').attr('src', 'images/clients/black/tinyclues-logo%201.png');
        $('.quitoque').attr('src', 'images/clients/black/Logotype_Quitoque_RVB_blanc%201.png');
        $('.dii').attr('src', 'images/clients/black/Dii_Logo.png');
        $('.wm').attr('src', 'images/clients/black/wm-logo-white%201.png');
        $('.activation').attr('src', 'images/clients/black/logo-venise-activation-white%201.png');
        $('.beycome').attr('src', 'images/clients/black/Logo%20Beycome.png');
        $('.etage').attr('src', 'images/clients/black/3E-LOGO-black.png');
        $('.logick').attr('src', 'images/clients/black/logo-logick-noir.png');
    }

    let storage = window.sessionStorage;
    if (storage.getItem('darkmode')) {
        if(storage.getItem('darkmode')== 'true') {
            darkmodeon();
        } else {
            lightmodeon();
        }
    }
    
    $(".radio_button").on('click', function () {
        if ($('body').hasClass('blackbg')) {
            lightmodeon();
            storage.setItem('darkmode','false');
        } else {
            darkmodeon();
            storage.setItem('darkmode','true');
        }
    });

    /* ======================================= 
                    CURSOR 
    ========================================== */


    class RingDot {
    constructor() {
        this.root = document.body
        this.cursor = document.querySelector(".curzr")
        this.dot = document.querySelector(".curzr-dot")

        this.pointerX = 0
        this.pointerY = 0
        this.cursorSize = 20

        this.cursorStyle = {
        boxSizing: 'border-box',
        position: 'fixed',
        display: 'flex',
        top: `${ this.cursorSize / -2 }px`,
        left: `${ this.cursorSize / -2 }px`,
        zIndex: '2147483647',
        justifyContent: 'center',
        alignItems: 'center',
        width: `${ this.cursorSize }px`,
        height: `${ this.cursorSize }px`,
        backgroundColor: '#fff0',
        boxShadow: '0 0 0 1.25px #111920, 0 0 0 2.25px #F2F5F8',
        borderRadius: '50%',
        transition: '200ms, transform 100ms',
        userSelect: 'none',
        pointerEvents: 'none'
        }

        this.dotStyle = {
        boxSizing: 'border-box',
        position: 'fixed',
        zIndex: '2147483647',
        width: '4px',
        height: '4px',
        backgroundColor: '#111920',
        boxShadow: '0 0 0 1px #F2F5F8',
        borderRadius: '50%',
        userSelect: 'none',
        pointerEvents: 'none',
        }

        this.init(this.cursor, this.cursorStyle)
        this.init(this.dot, this.dotStyle)
    }

    init(el, style) {
        Object.assign(el.style, style)
        this.cursor.removeAttribute("hidden")
    }

    move(event) {
        if (event.target.localName === 'button' || 
            event.target.localName === 'a' || 
            event.target.onclick !== null ||
            event.target.className.includes('curzr-hover')) {
        this.hover(40)
        } else {
        this.hoverout()
        }
        
        this.pointerX = event.pageX + this.root.getBoundingClientRect().x
        this.pointerY = event.pageY + this.root.getBoundingClientRect().y
    
        this.cursor.style.transform = `translate3d(${this.pointerX}px, ${this.pointerY}px, 0)`
    }

    hover(radius) {
        this.cursor.style.width = this.cursor.style.height = `${radius}px`
        this.cursor.style.top = this.cursor.style.left = `${radius / -2}px`
    }

    hoverout() {
        this.cursor.style.width = this.cursor.style.height = `${this.cursorSize}px`
        this.cursor.style.top = this.cursor.style.left = `${this.cursorSize / -2}px`
    }

    click() {
        this.cursor.style.transform += ` scale(0.75)`
        setTimeout(() => {
        this.cursor.style.transform = this.cursor.style.transform.replace(` scale(0.75)`, '')
        }, 35)
    }

    remove() {
        this.cursor.remove()
        this.dot.remove()
    }
    }

    (() => {
    const cursor = new RingDot()
    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.onmousemove = function (event) {
        cursor.move(event)
        }
        document.onclick = function () {
        cursor.click()
        }
    } else {
        cursor.remove()
    }
    })()

    toView(getH());
});