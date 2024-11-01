const addressopen = document.querySelector('#address1')
const addressclose = document.querySelector('#address-close1')
//console.log(addressbtn)
addressopen.addEventListener("click",function(){
    document.querySelector('.address').style.display = "flex";
})
addressclose.addEventListener("click",function(){
    document.querySelector('.address').style.display = "none";
})
const addressopen2 = document.querySelector('#address2')
const addressclose2 = document.querySelector('#address-close2')
//console.log(addressbtn)
addressopen2.addEventListener("click",function(){
    document.querySelector('.address').style.display = "flex";
})
addressclose2.addEventListener("click",function(){
    document.querySelector('.address').style.display = "none";
})
const addressopen3 = document.querySelector('#address3')
const addressclose3 = document.querySelector('#address-close3')
//console.log(addressbtn)
addressopen3.addEventListener("click",function(){
    document.querySelector('.address').style.display = "flex";
})
addressclose3.addEventListener("click",function(){
    document.querySelector('.address').style.display = "none";
})
//slider
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



