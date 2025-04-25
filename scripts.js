let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const indicators = document.querySelectorAll(".indicator");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });

    indicators.forEach((indicator, i) => {
        indicator.classList.remove("active");
        if (i === index) {
            indicator.classList.add("active");
        }
    });

    currentSlide = index;
}

function goToSlide(index) {
    showSlide(index);
}

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
    showSlide(currentSlide);
}

setInterval(() => moveSlide(1), 5000); 

document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
});
