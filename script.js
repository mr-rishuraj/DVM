
// IMAGE SWITCHING LOGIC
const tabs = document.querySelectorAll(".tab");
const image = document.getElementById("productivity-img");

const images = {
  inbox: "Inbox.png",
  boards: "Boards.png",
  planner: "Planner.png",
};

let currentIndex = 0; // to track current tab index

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    if (index === currentIndex) return; // prevent re-click glitch

    // Remove active from all and add to clicked tab
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const target = tab.getAttribute("data-target");

    const goingForward = index > currentIndex;

    image.classList.add(goingForward ? "slide-out-left" : "slide-out-right");

    setTimeout(() => {
      image.src = images[target];

      image.classList.remove("slide-out-left", "slide-out-right");
      image.classList.add("slide-in");

      setTimeout(() => {
        image.classList.remove("slide-in");
      }, 450);
    }, 450);

    currentIndex = index;
  });
});


const slides = document.querySelectorAll(".testimonial-card");
const dotsContainer = document.querySelector(".dots");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

// Create dots dynamically
slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides[current].classList.remove("active");
  dots[current].classList.remove("active");
  current = (index + slides.length) % slides.length;
  slides[current].classList.add("active");
  dots[current].classList.add("active");
}

nextBtn.addEventListener("click", () => showSlide(current + 1));
prevBtn.addEventListener("click", () => showSlide(current - 1));

setInterval(() => showSlide(current + 1), 7000);

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  document.body.classList.toggle("menu-open");
  hamburger.classList.toggle("open"); 
});

