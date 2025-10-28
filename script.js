// IMAGE SWITCHING LOGIC
const tabs = document.querySelectorAll(".tab");
const image = document.getElementById("productivity-img");

const images = {
  inbox:
    "Inbox.png",
  boards:
    "Boards.png",
  planner:
    "Planner.png",
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active from all
    tabs.forEach((t) => t.classList.remove("active"));

    // Add active to clicked one
    tab.classList.add("active");

    // Change image with fade effect
    const target = tab.getAttribute("data-target");
    image.style.opacity = 0;
    setTimeout(() => {
      image.src = images[target];
      image.style.opacity = 1;
    }, 300);
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

// Optional auto-slide every 7 seconds
setInterval(() => showSlide(current + 1), 7000);

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});
