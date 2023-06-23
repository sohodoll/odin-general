const sliderLIne = document.querySelector('.slider-line');
const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

let position = 0;
let currentSlide = position / 400;

leftArrow.addEventListener('click', () => {
  if (position > 0) {
    position -= 400;
    sliderLIne.style.transform = `translateX(${-position}px)`;
  } else {
    position = 800;
    sliderLIne.style.transform = `translateX(${-position}px)`;
  }
  dots.forEach((dot) => dot.classList.remove('active'));
  currentSlide = position / 400;
  dots[currentSlide].classList.add('active');
});

rightArrow.addEventListener('click', () => {
  if (position < 800) {
    position += 400;
    sliderLIne.style.transform = `translateX(${-position}px)`;
  } else {
    position = 0;
    sliderLIne.style.transform = `translateX(${-position}px)`;
  }
  currentSlide = position / 400;
  dots.forEach((dot) => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    dots.forEach((dot) => dot.classList.remove('active'));

    dots[index].classList.add('active');
    position = index * 400;
    sliderLIne.style.transform = `translateX(${-position}px)`;
  });
});
