'use strict';

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearInterval(autoslide);
  showSlides2(slideIndex = n);
  autoslide = setInterval(showSlides, 5000); // Change image every 2 seconds
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("bookimg");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.opacity = "1";
  dots[slideIndex - 1].className += " active";
}

//showSlides();
let autoslide = setInterval(showSlides, 5000); // Change image every 2 seconds

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("bookimg");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.opacity = "1";
  dots[slideIndex - 1].className += " active";
}
