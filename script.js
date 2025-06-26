//Saudação no console
console.log("Olá! Seja bem-vindo(a) ao portfólio do Gabriel Batista!");

// Animação de aparecimento ao rolar a página (scroll reveal)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aparecer');
    }
  });
}, {
  threshold: 0.1 // ativa quando 10% do elemento aparece na tela
});

// Observa todos os cards e habilidades
document.querySelectorAll('.card, .scroll-habilidades .habilidade').forEach(el => {
  observer.observe(el);
});

// Quando clicar em algum ícone social, exibe no console qual foi
document.querySelectorAll('.icone').forEach(icon => {
  icon.addEventListener('click', () => {
    const nome = icon.getAttribute('aria-label');
    console.log(Você clicou no ícone: ${nome});
  });
});

// Animação de digitação no título (se tiver classe .titulo-digitando)
const tituloDigitando = document.querySelector(".titulo-digitando");
if (tituloDigitando) {
  const texto = tituloDigitando.textContent;
  tituloDigitando.textContent = "";
  let i = 0;

  const digitar = () => {
    if (i < texto.length) {
      tituloDigitando.textContent += texto.charAt(i);
      i++;
      setTimeout(digitar, 100);
    }
  };

  digitar();
}