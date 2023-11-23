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

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (entry !== null) {
      if (entry.isIntersecting) {
        document.body.classList.remove("sticky");
      } else {
        document.body.classList.add("sticky");
      }
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
