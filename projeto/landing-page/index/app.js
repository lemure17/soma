// ─── MENU HAMBÚRGUER ───────────────────────────────────────────────
//
// document.querySelector() → encontra o PRIMEIRO elemento que
// corresponde ao seletor CSS passado como string.
// É o equivalente JS de dizer "pegue esse elemento da página".

const nav       = document.querySelector('nav');
const botaoMenu = document.querySelector('.logo button');

// addEventListener(evento, função) → "ouça" o elemento esperando
// um evento. Quando ele acontecer, execute a função.
// O evento 'click' dispara sempre que o elemento for clicado.

botaoMenu.addEventListener('click', function () {

  // classList.toggle(classe) → se a classe já existe, remove.
  //                             Se não existe, adiciona.
  // É como um interruptor de luz.
  nav.classList.toggle('menu-aberto');

});

// ─── FECHA O MENU AO CLICAR EM UM LINK ────────────────────────────
//
// querySelectorAll() → igual ao querySelector, mas retorna TODOS
// os elementos que correspondem ao seletor (uma lista).

const linksNav = document.querySelectorAll('.navbar ul li a');

// forEach() → para cada item da lista, executa a função.
// O parâmetro 'link' representa o item atual a cada volta.

linksNav.forEach(function (link) {
  link.addEventListener('click', function () {

    // classList.remove() → remove a classe sem verificar.
    // Aqui queremos sempre fechar, não alternar.
    nav.classList.remove('menu-aberto');

  });
});
