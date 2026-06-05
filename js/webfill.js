const existingWebsites = [
  {
    title: "Colour Picker",
    description:
      "One of the tickets we were tasked to make was to use Javascript to code a change in the hex code and change the background randomly according to the hex code displayed. ",
    image: "../Assets/Images/colorPicker.jpg",
    altText: "Screenshot taken from a colour picker activity",
  },
  {
    title: "Server Status based on a given object array",
    description:
      "The task here was to build a page using Javascript to display infomation within a given object array, we needed to update the DOM using JS as well as creating a function that would dynamically change based on the object array instead of hardcoding with HTML. ",
    image: "../Assets/Images/miniServerUpdater.jpg",
    altText: "Screenshot from a server status activity",
  },
  {
    title: "Simple Counter",
    description:
      "In this Activity we were tasked to build a simple counter that changed based on whichever button was clicked, using Javascript ",
    image: "../Assets/Images/counterPic.jpg",
    altText: "Screenshot from counter activity",
  },
  {
    title: "Review displayer for users",
    description:
      "In this activity we were tasked to build a dynamic DOM updater using Javascript to showcase different reviews within an object array with a button that would randomise the reviews shown or go in order",
    image: "../Assets/Images/reviewSite.jpg",
    altText: "Screenshot from review activity",
  },
];

const upcomingWebsites = [
  {
    title: "Cookie Clicker",
    description:
      "The first website i would like to build by myself is a simple cookie clicker but personalised and adding twists to the established formula",
  },
  {
    title: "Personal Music player",
    description:
      "It would be easy to build a front-end music player to store all of my favourite music in one place and be able to play them without the need to pay for a subscription service",
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
