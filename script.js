/*------------- Play video popup ----------------*/
const play = document.querySelector('.video-play-btn');
const videosrc = document.getElementById('player-1').src;
const popup = document.querySelector('.video-popup');
const close = document.querySelector('.video-popup-close');

play.addEventListener('click', ()=>{
    popup.classList.add('open');
    videosrc.src('');
});

close.addEventListener('click', ()=>{
    popup.classList.remove('open');
    if(videosrc.src('')){
        videosrc.src(videosrc);
    }
});

$(window).on('load', function(){
    $('.preloader').fadeOut('slow');
})

$(document).ready(function(){
    /*------------- navbar shrink ----------------*/
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass('navbar-shrink');
        }else{
            $(".navbar").removeClass('navbar-shrink');
        }
    });

    /*------------- Owl Carousel ----------------*/
    $('.features-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    /*------------- Screenshot Carousel ----------------*/
    $('.screenshots-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    });

    /*------------- testimonials Carousel ----------------*/
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    /*------------- testimonials Carousel ----------------*/
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    /*------------- collapse menu responsive ----------------*/
    $(".nav-link").on('click', function(){
        $(".navbar-collapse").collapse('hide');
    });

    /*------------- toggle theme ----------------*/
    function toggleTheme(){
        if(localStorage.getItem('theme') != null){
            if(localStorage.getItem('theme') === 'dark'){
                $('body').addClass('dark');
            }else{
                $('body').removeClass('dark');
            }
        }
        updateIcon();
    }
    toggleTheme();
    
    $('.toggle-theme').on('click', function(){
        $('body').toggleClass('dark');
        if($('body').hasClass('dark')){
            localStorage.setItem('theme', 'dark');
        }else{
            localStorage.setItem('theme', 'light');
        }
        updateIcon();
    })

    function updateIcon(){
        if($('body').hasClass('dark')){
            $('.toggle-theme i').removeClass('bx bxs-moon');
            $('.toggle-theme i').addClass('bx bx-sun');
        }else{
            $('.toggle-theme i').removeClass('bx bx-sun');
            $('.toggle-theme i').addClass('bx bxs-moon');
        }
    }

});