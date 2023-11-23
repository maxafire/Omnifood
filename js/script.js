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

// Smooth scroll animiation (no longer necessary, because scroll-behavior: smooth now works in every browser!)
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href.startsWith("#") && href !== "#") {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
