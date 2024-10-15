let slideIndex = 1;
showSlides(slideIndex);

function autoAdvanceSlides() {
  slideIndex++;
  if (slideIndex > document.getElementsByClassName("mySlides").length) {
    slideIndex = 1;
  }
  showSlides(slideIndex);
}

let autoSlideInterval = setInterval(autoAdvanceSlides, 5000);

function currentSlide(n) {
  clearInterval(autoSlideInterval);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.onclick = function () {
  document.getElementById('scrolling-wrapper').scrollLeft += 740;
};
buttonLeft.onclick = function () {
  document.getElementById('scrolling-wrapper').scrollLeft -= 740;
};

const buttonRightPets = document.getElementById('slideRightPets');
const buttonLeftPets = document.getElementById('slideLeftPets');

buttonRightPets.onclick = function () {
  document.getElementById('scrolling-wrapper-pets').scrollLeft += 740;
};
buttonLeftPets.onclick = function () {
  document.getElementById('scrolling-wrapper-pets').scrollLeft -= 740;
};

function clickMenu() {
  if (hamburgerMenuMobile.style.display == "block") {
    hamburgerMenuMobile.style.display = "none";
  } else{
    hamburgerMenuMobile.style.display = "block";
  }
}