// aparecer menu al hacer scroll
const nav = document.querySelector('.nav');

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', window.scrollY > 0);
});

// hacer funcionar menu hamburguesa con jquery
$(document).ready(function(){
    $('#hamburguer').click(function(){
        $('.menu').toggleClass('show');
    });
    $('li , .logo-menu').click(function(){
        $('.menu').removeClass('show');
    });
});