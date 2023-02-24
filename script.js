const darkModeBtn = document.getElementById("dark-mode-btn");
const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");

darkModeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");
  main.classList.toggle("dark-mode");
  darkModeBtn.classList.toggle("dark-mode");
});
