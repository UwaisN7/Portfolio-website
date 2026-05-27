document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("nav").innerHTML = `
     <div class="nav-left"></div>
        <div class="nav-right">
          <button class="cv-btn">📄 CV</button>
          <div class="dropdown-container">
            <button class="contact-btn">✉️ Contact</button>
            <div class="dropdown-content">
              <a href="mailto:uwaisn73@gmail.com">📧 uwaisn73@gmail.com</a>
              <a href="tel: +27 791393927">+27 0791393927</a>
              <a href="https://github.com/UwaisN7">My Github UwaisN7</a>
              <div class="Email-divider"></div>
              <input type="email" placeholder="Enter your email" />
              <button id="submit-email-btn">Notify Me</button>
            </div>
          </div>
          <button class="darkmode-btn">Toggle darkMode</button>
        </div>
  `;
});
