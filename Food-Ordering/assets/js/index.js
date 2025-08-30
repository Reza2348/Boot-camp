let menuToggle = document.getElementById("menuToggle");
let mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  menuToggle.textContent = mobileMenu.classList.contains("show") ? "✖" : "☰";
});
