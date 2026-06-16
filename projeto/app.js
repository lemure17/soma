
const nav       = document.querySelector('nav');
const botaoMenu = document.querySelector('.logo button');


botaoMenu.addEventListener('click', function () {

  nav.classList.toggle('menu-aberto');

});


const linksNav = document.querySelectorAll('.navbar ul li a');


linksNav.forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('menu-aberto');

  });
});
