const burger = document.querySelector(".btn__burger");
const mobileMenu = document.querySelector(".mobile__menu");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active"); // Toggle klasa "active"
});
