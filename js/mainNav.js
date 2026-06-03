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

  //darkmode Stuff
  const darkModeBtn = document.querySelector(".darkmode-btn");

  if (darkModeBtn) {
    if (localStorage.getItem("theme") === "light") {
      document.body.classList.add("light-mode");
      darkModeBtn.textContent = "Dark Mode";
    } else {
      darkModeBtn.textContent = "Light Mode";
    }

    darkModeBtn.addEventListener("click", toggleDarkMode);

    function toggleDarkMode() {
      document.body.classList.toggle("light-mode");

      if (document.body.classList.contains("light-mode")) {
        darkModeBtn.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
      } else {
        darkModeBtn.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
      }
    }
  }

  //CV stufff
  const cvBtn = document.querySelector(".cv-btn");

  cvBtn.addEventListener("click", downloadCV);

  function downloadCV() {
    const link = document.createElement("a");
    link.href = "Assets/Files/Uwais-Noor-Moosa-CV.pdf";
    link.href = "../Assets/Files/Uwais-Noor-Moosa-CV.pdf";
    link.download = "Uwais-Noor-Moosa-CV.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  //Dropdown stufff
  const contactBtn = document.querySelector(".contact-btn");
  const dropdown = document.querySelector(".dropdown-content");
  if (contactBtn && dropdown) {
    contactBtn.addEventListener("click", createContactDropdown);
    function createContactDropdown(event) {
      event.stopPropagation();
      dropdown.classList.toggle("show");
    }

    document.addEventListener("click", removeContactDropDown);
    function removeContactDropDown(event) {
      if (
        !contactBtn.contains(event.target) &&
        !dropdown.contains(event.target)
      ) {
        dropdown.classList.remove("show");
      }
    }
  }

  //emailStuff
  const submitBtn = document.getElementById("submitEmailBtn");
  const emailInput = document.getElementById("dropdownEmail");
  if (submitBtn && emailInput) {
    submitBtn.addEventListener("click", sendEmail);
    function sendEmail() {
      const email = emailInput.value.trim();
      if (email && email.includes("@")) {
        alert(`Thanks! I'll notify uwaisn73@gmail.com`);
        emailInput.value = "";
        dropdown.classList.remove("show");
      } else {
        alert("Please enter a valid email address");
      }
    }
  }

  const menuBtn = document.querySelector(".dropdown-btn");
  const nav = document.querySelector("nav");
  if (menuBtn && nav) {
    nav.classList.add("hidden");
    menuBtn.innerHTML = "☰ Menu";

    menuBtn.addEventListener("click", hideMenu);
    function hideMenu(event) {
      event.stopPropagation();
      nav.classList.toggle("hidden");
      menuBtn.innerHTML = nav.classList.contains("hidden") ? "☰ Menu" : "✕";
    }
  }
});
