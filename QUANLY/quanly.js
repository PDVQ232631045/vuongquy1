const menuToggle = document.querySelector('.menu');
const mainNav = document.querySelector('.main-nav')

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('menuclick');
});
