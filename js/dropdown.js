const contactBtn = document.querySelector(".contact-btn");
const contactDropdown = document.querySelector(".dropdown-content");

if (contactBtn && contactDropdown) {
  contactBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents closing immediately
    contactDropdown.classList.toggle("show");
  });
}

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
  if (contactDropdown && contactBtn) {
    if (
      !contactBtn.contains(event.target) &&
      !contactDropdown.contains(event.target)
    ) {
      contactDropdown.classList.remove("show");
    }
  }
});

const submitEmailBtn = document.getElementById("submitEmailBtn");
const emailInput = document.getElementById("dropdownEmail");

if (submitEmailBtn && emailInput) {
  submitEmailBtn.addEventListener("click", function () {
    const email = emailInput.value.trim();

    if (email === "") {
      alert("Please enter your email address.");
    } else if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
    } else {
      alert(`Thanks! I'll notify ${email} when I'm available for work.`);
      emailInput.value = "";
      contactDropdown.classList.remove("show");
    }
  });
}
