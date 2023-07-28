const slides = document.querySelectorAll(".slide");
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");

let currSlide = 0;
let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {
  if (currSlide === maxSlide) {
    currSlide = 0;
  } else {
    currSlide++;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currSlide) * 100}%)`;
  });
});

prevSlide.addEventListener("click", function () {
  if (currSlide === 0) {
    currSlide = maxSlide;
  } else {
    currSlide--;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currSlide) * 100}%)`;
  });
});
