// Selecciona el botón de menú y el menú
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

// Agrega un evento de clic al botón
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active'); // Alterna la clase 'active' en el menú
});