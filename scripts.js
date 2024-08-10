// scripts.js

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

function showQuiz() {
    slides[currentSlide].classList.remove('active');
    document.getElementById('quiz').classList.add('active');
}

// Inisialisasi slide pertama
document.addEventListener('DOMContentLoaded', () => {
    slides[currentSlide].classList.add('active');
});
