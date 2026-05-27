document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("nav").innerHTML = `
    <div class="nav-left"></div>
    <div class="nav-right">
      <button class="cv-btn">&#128196; CV</button>
      <div class="dropdown-container">
        <button class="contact-btn"> Contact</button>
        <div class="dropdown-content">
          <a href="mailto:uwaisn73@gmail.com"> &#128204; uwaisn73@gmail.com</a>
          <a href="tel:+27791393927">&#128222; +27 0791393927</a>
          <a href="https://github.com/UwaisN7">&#128187; GitHub</a>
          <div class="email-divider"></div>
          <input type="email" placeholder="Enter your email" id="dropdownEmail">
          <button id="submitEmailBtn">Notify Me</button>
        </div>
      </div>
      <button class="darkmode-btn"> Dark Mode</button>
    </div>
  `;

  const darkModeBtn = document.querySelector(".darkmode-btn");
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
  }
  if (darkModeBtn) {
    darkModeBtn.addEventListener("click", function () {
      document.body.classList.toggle("light-mode");
      localStorage.setItem(
        "theme",
        document.body.classList.contains("light-mode") ? "light" : "dark",
      );
    });
  }

  const contactBtn = document.querySelector(".contact-btn");
  const dropdown = document.querySelector(".dropdown-content");
  if (contactBtn && dropdown) {
    contactBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdown.classList.toggle("show");
    });

    document.addEventListener("click", function (e) {
      if (!contactBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("show");
      }
    });
  }

  const submitBtn = document.getElementById("submitEmailBtn");
  const emailInput = document.getElementById("dropdownEmail");
  if (submitBtn && emailInput) {
    submitBtn.addEventListener("click", function () {
      const email = emailInput.value.trim();
      if (email && email.includes("@")) {
        alert(`Thanks! I'll notify ${email}`);
        emailInput.value = "";
        dropdown.classList.remove("show");
      } else {
        alert("Please enter a valid email address");
      }
    });
  }

  const menuBtn = document.querySelector(".dropdown-btn");
  const nav = document.querySelector("nav");
  if (menuBtn && nav) {
    nav.classList.add("hidden");
    menuBtn.innerHTML = "☰ Menu";

    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      nav.classList.toggle("hidden");
      menuBtn.innerHTML = nav.classList.contains("hidden") ? "☰ Menu" : "✕";
    });
  }
});
