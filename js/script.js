const yearEl = document.querySelector(".year");
if (yearEl !== null) {
  yearEl.textContent = new Date().getFullYear();
}
