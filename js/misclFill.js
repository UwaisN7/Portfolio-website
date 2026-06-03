const blenderProjects = [
  {
    title: "Sword",
    description: "First ever 3d model i made with a guide",
    image: "../Assets/Images/sword.jpg",
    altText: "Picture of a sword",
  },
  {
    title: "Paddle Bat",
    description: "Model made without a guide",
    image: "../Assets/Images/paddleBat.jpg",
    altText: "Screenshot from Project Village game",
  },
];

const universityProjects = [
  {
    title: "Environmental storytelling",
    description:
      "The assignement was to create an environment and describe it by having an exisitng in world story that made sense within the environment",
    pageLink: "",
  },
];

function renderBlenderProjects(blenderArray, containerSelection) {
  const container = document.getElementById(containerSelection);
  container.innerHTML = "";

  for (let i = 0; i < blenderArray.length; i++) {
    const blenderProject = blenderArray[i];

    let cardHTML = "";

    if (blenderProject.pageLink && blenderProject.pageLink !== "#") {
      cardHTML = `
        <article class="web-container">
          <img src="${blenderProject.image}" alt="${website.altText}">
          <div class="card-content">
            <h3>${blenderProject.title}</h3>
            <p>${blenderProject.description}</p>
            <a href="${blenderProject.webglLink}" class="play-link" target="_blank">Check out the finished page →</a>
          </div>
        </article>
      `;
    } else {
      cardHTML = `
        <article class="web-container">
          <img src="${blenderProject.image}" alt="${blenderProject.altText}">
          <div class="card-content">
            <h3>${blenderProject.title}</h3>
            <p>${blenderProject.description}</p>
          </div>
        </article>
      `;
    }

    container.innerHTML += cardHTML;
  }
}

function renderUniversityProjects(uniArray, containerSelection) {
  const container = document.getElementById(containerSelection);
  container.innerHTML = "";

  for (let i = 0; i < uniArray.length; i++) {
    const universityProject = uniArray[i];

    const cardHTML = `
      <article class="web-container">
        <div class="card-content">
          <h3>${universityProject.title}</h3>
          <p>${universityProject.description}</p>
        </div>
      </article>
    `;

    container.innerHTML += cardHTML;
  }
}

renderBlenderProjects(blenderProjects, "blender-container");
renderUniversityProjects(universityProjects, "uni-container");
