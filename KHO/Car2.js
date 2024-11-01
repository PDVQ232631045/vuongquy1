const slides = document.querySelectorAll(".slide");
let counter = 0;
const total = slides.length;
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});
const goPrev = ()=> {
    counter--;
    if(counter < 0) {
        counter = total -1;
    }
    slideImage();
};
const goNext = () => {
    counter++;
    if(counter >= total){
        counter = 0;
    }
    slideImage();
};
const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};
const menuToggle = document.querySelector('.menu');
const mainNav = document.querySelector('.main-nav')

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('menuclick');
});
