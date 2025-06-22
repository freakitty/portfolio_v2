$(function () {
  "use strict";

    /* ======================================= 
    RADIO BUTTON SWITCH 
    =============================== */

     function darkmodeon(){ 
        $('body').removeClass('whitebg');
        $('body').addClass('blackbg');
        $('.off_svg').css('display', 'none');
        $('.on_svg').css('display', 'block');
        $('h1').css('color', '#C7F8E8');
        $('h2').css('color', '#EEF7F4');
        $('h3').css('color', '#EEF7F4');
        $('h4').css('color', '#C7F8E8');
        $('.sub').css('color', '#EEF7F4');
        $('.home_text').css('color', '#C7F8E8');
        $('.desktop-menu').css('color', '#EEF7F4');
        $('.tableLabel').css('color', '#EEF7F4');
        $('.smallcaps_Text').css('color', '#EEF7F4');
        $('.ListItem_title').css('color', '#EEF7F4');
        $('.details').css('background-color', '#EEF7F4');
        $('.details').css('color', '#1E3B32');
        $('h5, .project_txt').css('color', '#EEF7F4');
        $('.header_card').css('color', '#EEF7F4');
        $('.icon_image').css('fill', '#EEF7F4');
        $('.chip_small, .chip ').css('color', '#38C395');
        $('a').css('color', '#EEF7F4');
        $('.focus').css('color', '#38C395');
        $('.text_about').css('color', '#38C395');
        $('.highlight').css('color', '#5CF6C3');
        $('.ListItem_title').css('color', '#EEF7F4');
        $('.bottom-name').css('color', '#848484');
        $('.navbar').css('background-color', '#181818');
        $('.anim .card').css('background-color', '#161616');
        $('#about, #contact').css('background-color', '#181818');
        $('.personnal-project').css('color', '#6B6B6B');
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
        $('h3').css('color', '#464646');
        $('.sub').css('color', '#464646');
        $('h4').css('color', '#464646');
        $('.details').css('background-color', '#181818');
        $('.details').css('color', '#EEF7F4');
        $('.tableLabel').css('color', '#464646');
        $('.smallcaps_Text').css('color', '#464646');
        $('.ListItem_title').css('color', '#464646');
        $('h5, .project_txt').css('color', '#464646');
        $('.home_text').css('color', '#464646');
        $('.desktop-menu').css('color', '#464646');
        $('.chip_small, .chip ').css('color', '#244E40');
        $('a').css('color', '#464646');
        $('.header_card').css('color', '#464646');
        $('.icon_image').css('fill', '#464646');
        $('.focus').css('color', '#38C395');
        $('.text_about').css('color', '#464646');
        $('.highlight').css('color', '#388169');
        $('.navbar').css('background-color', '#EEF7F4');
        $('.anim .card').css('background-color', '#EEF4F2');
        $('#about, #contact').css('background-color', '#EEF7F4');
        $('.personnal-project').css('color', '#CECECE');
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

  /* ============================= 
        CURSOR
    ================================ */

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

// ------- Osmo [https://osmo.supply/] ------- //


gsap.registerPlugin(SplitText, CustomEase)

CustomEase.create("osmo-ease","0.625, 0.05, 0, 1");

function initMaskedTextReveal() {
  const heading = document.querySelector('[data-split="heading"]');

  SplitText.create(heading, {
    type: "words",
    mask: "lines",
    wordsClass: "words",
  });

  let currentTween, currentTargets;
  const config = {
    words: { duration: 0.6, stagger: 0.06 },

  };
let mySplitText = new SplitText ('.split', {type: 'words'});
let words = mySplitText.words;

gsap.from(words, {
    yPercent:100,
    stagger: 0.2,
    duration: 0.6,
    ease: 'Circ.easeOut'
})

}

// Initialize Masked Text Reveal
document.fonts.ready.then(function () {
  initMaskedTextReveal();
})

var $copyContainer = $(".copy_container"),
    $copyWidth = $('.copy_container').find('p').width();

var mySplitText = new SplitText($copyContainer, {type:"words"}),
    splitTextTimeline = new TimelineMax();
var handleTL = new TimelineMax();

// WIP - need to clean up, work on initial state and handle issue with multiple lines on mobile

var tl = new TimelineMax();

tl.add(function(){
  animateCopy();
  blinkHandle();
}, 0.2)

function animateCopy() {
  mySplitText.split({type:"chars, words"}) 
  splitTextTimeline.staggerFrom(mySplitText.chars, 0.001, {autoAlpha:0, ease:Back.easeInOut.config(1.7), onComplete: function(){
    animateHandle()
  }}, 0.04);
}

function blinkHandle() {
  handleTL.fromTo('.handle', 0.4, {autoAlpha:0},{autoAlpha:1, repeat:-1, yoyo:true}, 0);
}

function animateHandle() {
  handleTL.to('.handle', 0.7, {x:$copyWidth, ease:SteppedEase.config(12)}, 0.05);
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  smooth: 1.5, 
  effects: true,
  smoothTouch: 0.1,
});

gsap.from('.draw', {
  ease: "expo.out",
  scrollTrigger: {
    trigger: '.heading',
    start: "clamp(top center)",
    scrub: true,
    pin: '.pin',
    pinSpacing: false,
  }
})

    toView(getH());
});