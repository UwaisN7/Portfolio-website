const existingWebsites = [
  {
    title: "Website 1",
    description: "Hellow world ",
    image: "#",
    pageLink: "../Assets/WebGl builds/Village Management sim/village.html",
    altText: "Screenshot from Project Village game",
  },
];

const upcomingWebsites = [
  {
    title: "Cookie Clicker",
    description:
      "The first website i would like to build by myself is a simple cookie clicker but personalised to my preferences ",
  },
];

function renderExisitngWebsites(webArray, containerSelection) {
  const container = document.getElementById(containerSelection);
  container.innerHTML = "";

  for (let i = 0; i < webArray.length; i++) {
    const website = webArray[i];

    let cardHTML = "";

    if (website.pageLink && website.pageLink !== "#") {
      cardHTML = `
        <article class="web-container">
          <img src="${website.image}" alt="${website.altText}">
          <div class="card-content">
            <h3>${website.title}</h3>
            <p>${website.description}</p>
            <a href="${website.webglLink}" class="play-link" target="_blank">Check out the finished page →</a>
          </div>
        </article>
      `;
    } else {
      cardHTML = `
        <article class="web-container">
          <img src="${website.image}" alt="${website.altText}">
          <div class="card-content">
            <h3>${website.title}</h3>
            <p>${website.description}</p>
          </div>
        </article>
      `;
    }

    container.innerHTML += cardHTML;
  }
}

function renderUpcomingWebsites(webArray, containerSelection) {
  const container = document.getElementById(containerSelection);
  container.innerHTML = "";

  for (let i = 0; i < webArray.length; i++) {
    const website = webArray[i];

    const cardHTML = `
      <article class="web-container">
        <div class="card-content">
          <h3>${website.title}</h3>
          <p>${website.description}</p>
        </div>
      </article>
    `;

    container.innerHTML += cardHTML;
  }
}

renderExisitngWebsites(existingWebsites, "existing-website");
renderUpcomingWebsites(upcomingWebsites, "upcoming-website");
