// Set current year
const yearEl = document.querySelector(".year");
if (yearEl !== null) {
  yearEl.textContent = new Date().getFullYear();
}

// Mobile navigation
const btnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");
btnEl.addEventListener("click", (e) => {
  headerEl.classList.toggle("nav-open");
});
