function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  // pegar a tag img.
  const img = document.querySelector('#profile img');

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png');
    img.setAttribute('alt', 'Foto de Rafael Sousa tocando guitarra, usando camisa cinza, barba e fundo verde água.');
  } else {
    img.setAttribute('src', './assets/avatar.png');
  }

  // substituir a imagem.

  // se tiver light mode, adicionar imagem light.

  // se tiver sem light mode, manter a imagem normal.




}