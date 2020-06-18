//Select element function

const selectElement = function (element) {
      return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

//Scroll scrollreveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

//Moving Text animations
$(document).on('scroll', function() {
  $('h1').css("left", Math.max(500 - 0.35 * window.scrollY,
    0) + "px");
  $('h2').css("right", Math.max(500 - 0.35 * window.scrollY,
  0) + "px");
})
