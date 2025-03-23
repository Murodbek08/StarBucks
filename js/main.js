// Carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1, // Bir vaqtda nechta slayd ko‘rsatilsin
    loop: true, // Cheksiz aylanish
    margin: 10, // Elementlar orasidagi masofa
    nav: true, // Oldinga va orqaga tugmalar
    dots: true, // Pastdagi nuqtali indikatorlar
    autoplay: true, // Avtomatik slayd o'tishi
    autoplayTimeout: 1000, // 3 soniyada bitta slayd
    autoplayHoverPause: true, // Sichqoncha ustida bo‘lsa, to‘xtaydi
    navText: ["&larr;", "&larr;"], // O'ng va chap tugmalar
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3.8 },
    },
  });
});

// navbar shrink
window.addEventListener("scroll", function () {
  shrink();
});
let navbar = document.getElementById("header");
function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}
// loading

const loading = document.getElementById("loading");

const loadingDuration = 3000; // 1.8s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);
//back to top

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
const myBtn = document.getElementById("myBtn");
myBtn.onclick = function () {
  const scrollStep = -window.scrollY / (10 / 180);
  const scrollInterval = setInterval(() => {
    if (window.scrollY === 0) {
      clearInterval(scrollInterval);
    } else {
      window.scrollBy(0, scrollStep);
    }
  }, 15);
};
