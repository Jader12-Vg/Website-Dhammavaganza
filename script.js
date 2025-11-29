/* Slideshow */
const images = [
  "Dokumentasi/1.jpeg",
  "Dokumentasi/2.jpeg",
  "Dokumentasi/3.jpeg",
  "Dokumentasi/4.jpeg",
  "Dokumentasi/5.jpeg",
  "Dokumentasi/6.jpeg",
  "Dokumentasi/7.jpeg",
  "Dokumentasi/8.jpeg",
  "Dokumentasi/9.jpeg",
  "Dokumentasi/10.jpeg",
  "Dokumentasi/11.jpeg",
  "Dokumentasi/12.jpeg",
  "Dokumentasi/13.jpeg",
  "Dokumentasi/14.jpeg",
  "Dokumentasi/15.jpeg",
];

let index = 0;
const slideshow = document.getElementById("slideshow");

function showSlide() {
  slideshow.src = images[index];
}

function nextSlide() {
  index = (index + 1) % images.length;
  showSlide();
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  showSlide();
}

setInterval(nextSlide, 3000); // ganti foto tiap 3 detik



/* Scroll Animation Reveal */
const elements = document.querySelectorAll(".section, .member, .path-button");

function reveal() {
    let trigger = window.innerHeight * 0.85;
    elements.forEach(el => {
        let top = el.getBoundingClientRect().top;
        if(top < trigger){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();

/* Swiper */
var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  fadeEffect: { crossFade: true },
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const clickSound = document.getElementById("clickSound");
document.querySelectorAll("nav a, button").forEach(el => {
  el.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

