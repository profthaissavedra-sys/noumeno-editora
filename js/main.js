// NOUMENO EDITORA — main.js

const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.menu a').forEach(link => {
  link.classList.remove('ativo');
  if (link.getAttribute('href') === paginaAtual) link.classList.add('ativo');
});

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) entrada.target.classList.add('visivel');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.area-card, .livro-card, .numero-item').forEach(el => {
  el.classList.add('animar');
  observador.observe(el);
});

const estiloAnimacao = document.createElement('style');
estiloAnimacao.textContent = `
  .animar { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; }
  .animar.visivel { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(estiloAnimacao);
