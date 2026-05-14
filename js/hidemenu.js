const menuBtn = document.querySelector(".dropdown-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", closeMenu);

nav.classList.add("hidden");
menuBtn.innerHTML = "☰ Menu";

function closeMenu() {
  event.stopPropagation();
  nav.classList.toggle("hidden");

  if (nav.classList.contains("hidden")) {
    menuBtn.innerHTML = "☰ Menu";
  } else {
    menuBtn.innerHTML = "↓";
  }
}
