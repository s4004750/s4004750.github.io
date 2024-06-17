let slideIndex1 = 0;
let slideIndex2 = 0;

showSlides(1, slideIndex1);
showSlides(2, slideIndex2);

function nextSlide(n) {
    if (n == 1) {
        showSlides(1, ++slideIndex1);
    } else {
        showSlides(2, ++slideIndex2);
    }
}

function prevSlide(n) {
    if (n == 1) {
        showSlides(1, --slideIndex1);
    } else {
        showSlides(2, --slideIndex2);
    }
}
// It was really difficult figuring out this code for this assignment however I used 
// resources such as free online lectures, youtube videos and advice from people who know
// code. 

function showSlides(slideshowNum, n) {
    let slides = document.querySelectorAll(`#slideshow${slideshowNum} .slide`);
    if (n >= slides.length) {
        if (slideshowNum === 1) {
            slideIndex1 = 0;
        } else {
            slideIndex2 = 0;
        }
    }
    if (n < 0) {
        if (slideshowNum === 1) {
            slideIndex1 = slides.length - 1;
        } else {
            slideIndex2 = slides.length - 1;
        }
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    if (slideshowNum === 1) {
        slides[slideIndex1].style.display = "block";
    } else {
        slides[slideIndex2].style.display = "block";
    }
}