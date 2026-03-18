window.addEventListener('load', scrollEvents);
window.addEventListener('scroll', scrollEvents);

function scrollEvents() {
    var nav = document.querySelector("nav");
    var about = document.getElementById('about-link');
    var contact = document.getElementById('contact-link');

    var html = document.getElementById('html-skl');
    var css = document.getElementById('css-skl');
    var js = document.getElementById('js-skl');
    var bootstr = document.getElementById('bootstr-skl');
    var react = document.getElementById('react-skl');


    if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {

        if (about.classList.contains('active') || contact.classList.contains('active')) {
            nav.classList.add('scroll-white');
            nav.classList.remove('scroll-dark');
        } else {
            nav.classList.add('scroll-dark');
            nav.classList.remove('scroll-white');
        }

    } else {
        nav.classList.remove("scroll-dark");
    }

    if (document.body.scrollTop >= 1124 || document.documentElement.scrollTop >= 1124) {
        $(html).animate({ width: '90%' }, 1000);
    };

    if (document.body.scrollTop >= 1287 || document.documentElement.scrollTop >= 1287) {
        $(css).animate({ width: '100%' }, 1000);
    };

    if (document.body.scrollTop >= 1450 || document.documentElement.scrollTop >= 1635) {
        $(js).animate({ width: '85%' }, 1000);
    };

    if (document.body.scrollTop >= 1613 || document.documentElement.scrollTop >= 1819) {
        $(bootstr).animate({ width: '100%' }, 1000);
    };

    if (document.body.scrollTop >= 1776 || document.documentElement.scrollTop >= 1776) {
        $(react).animate({ width: '50%' }, 2000);
    };

    if ($('#aboutimg-wrapper').attr('data-scroll') === 'in'){
        $('#about-image').show();
    }else {
        $('#about-image').hide();
    };
};



document.addEventListener('DOMContentLoaded', function () {

    const sections = document.querySelectorAll("section");
    const menu_links = document.querySelectorAll(".nav-link");

    const makeActive = link => menu_links[link].classList.add("active");
    const removeActive = link => menu_links[link].classList.remove("active");
    const removeAllActive = () => [...Array(sections.length).keys()].forEach(link => removeActive(link));

    const sectionMargin = 80;
    let currentActive = 0;

    window.addEventListener("load", scrollSpy);
    window.addEventListener("scroll", scrollSpy);

    function scrollSpy() {

        const current = sections.length - [...sections].reverse().findIndex(section => window.scrollY >= section.offsetTop - sectionMargin) - 1;

        if (current !== currentActive) {
            removeAllActive();
            currentActive = current;
            makeActive(current);
        };
    };
}, false);

$('input,textarea').focus(function () {
    $(this).siblings().css('color', '#2A6DFD')
});

$('input,textarea').blur(function () {
    $(this).siblings().css('color', '#000')
});


var toggler = document.querySelector('#hamburger');

toggler.addEventListener('click', toggleOpen);

function toggleOpen() {
    $('#nav-menu').slideToggle(200).css('display', 'flex');
    if (toggler.classList.contains('open2')) {
        toggler.classList.remove('open2');
        setTimeout(function () {
            toggler.classList.remove('open');
        }, 300);
    } else {
        toggler.classList.add('open');
        setTimeout(function () {
            toggler.classList.add('open2');
        }, 300);
    }
};

$('.nav-link').click(function () {
    if (screen.width <= 768) {
        toggleOpen();
    }
});

window.addEventListener('load',function(){
    $('body').css('overflow','hidden');
    setTimeout(function(){
        $('.preloader').fadeOut('slow');
        $('body').css('overflow','visible');
    },2000);
    
    $('.col-1,.col-2').hide();
    
    setTimeout(function(){
        $('.col-1,.col-2').fadeIn('slow');
    },2500);
});

ScrollOut({
    targets: '.dts'
});
