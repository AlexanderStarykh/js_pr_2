function slider() {
    let slides = document.querySelectorAll('.slider-item'),
    next = document.querySelector('.next'),
    prev = document.querySelector('.prev'),
    slideIndex = 1,
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');


function showSlides (n){
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');

    dots.forEach((item) => item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
}
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

prev.addEventListener('click', function() {
    plusSlides(-1);
});

next.addEventListener('click', function() {
    plusSlides(1);
});

dotsWrap.addEventListener('click', (event) => {
    for (let i = 0; i < dots.length + 1; i++){
        if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
            currentSlide(i);
        }
    }    
});
}

module.exports = slider;