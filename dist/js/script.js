window.addEventListener('DOMContentLoaded', () =>{
    const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.header__menu-mobile'),
    list = document.querySelectorAll('.header__list-mobile');

    hamburger.addEventListener('click', function(){
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });

    list.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('active');
            hamburger.classList.toggle('active');
        })
    });
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("reviews__slides");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

slides[slideIndex-1].style.display = "block";
}

var acc = document.getElementsByClassName("faq__accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
