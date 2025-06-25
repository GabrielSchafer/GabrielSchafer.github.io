// Pega o elemento header (navbar)
const header = document.querySelector('header');

// Escuta o evento de scroll na janela
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    // Se rolou mais de 50 pixels, adiciona a classe 'show' que deixa a navbar visível
    header.classList.add('show');
  } else {
    // Se voltou para o topo, remove a classe 'show' para esconder a navbar
    header.classList.remove('show');
  }
});

// Seleciona todos os elementos com a classe 'slide' e armazena em um array-like
const slides = document.querySelectorAll('.slide');

// Define um índice inicial, começando no primeiro slide
let index = 0;

// Função para exibir o slide correspondente ao índice passado
function showSlide(i) {
  // Para cada slide, remove a classe 'ativo'
  slides.forEach((slide, idx) => {
    slide.classList.remove('ativo');

    // Adiciona a classe 'ativo' apenas ao slide cujo índice corresponde a 'i'
    if (idx === i) slide.classList.add('ativo');
  });
}

// Adiciona um ouvinte de evento ao botão "next" (próximo)
// Ao clicar, incrementa o índice e exibe o próximo slide, com rotação circular (volta ao início)
document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

// Adiciona um ouvinte de evento ao botão "prev" (anterior)
// Ao clicar, decrementa o índice e exibe o slide anterior, com rotação circular (volta ao final)
document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});
