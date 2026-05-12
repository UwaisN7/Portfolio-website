const darkModeBtn = document.querySelector(".darkmode-btn");
darkModeBtn.addEventListener("click", toggleDarkMode);

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
}
function toggleDarkMode() {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}
