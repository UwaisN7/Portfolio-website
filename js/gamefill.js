const completedGames = [
  {
    title: "Project Village",
    description:
      "This game is about managing AI to maintain building integrity by assigning them to buildings for repair.",
    image: "../Assets/Images/gamePagePic.jpg",
    webglLink: "../Assets/WebGl builds/Village Management sim/village.html",
    altText: "Screenshot from Project Village",
  },
  {
    title: "Angela's Mission",
    description: "Shoot up a casino from a top down perspective",
    image: "../Assets/Images/angela's-misson.jpg",
    webglLink: "#",
    altText: "Screenshot from Angela's Mission",
  },
];

const upcomingGames = [
  {
    title: "Project Village",
    description:
      "This game is about managing AI to maintain building integrity by assigning them to buildings for repair.",
  },
];

function renderExisitngGames(gamesArray, containerSelection) {
  const container = document.getElementById(containerSelection);

  container.innerHTML = "";

  for (let i = 0; i < gamesArray.length; i++) {
    const game = gamesArray[i];

    const cardHTML = `
      <article class="game-container">
          <img src="${game.image}" alt="${game.altText}">
          <div class="card-content">
            <h3>${game.title}</h3>
            </a>
            <p>${game.description}</p>
             <a href="${game.webglLink}" class="play-link" target="_blank">Play Game →</a>
          </div>
      </article>
`;

    container.innerHTML += cardHTML;
  }
}

function renderUpcomingGames(gamesArray, containerSelection) {
  const container = document.getElementById(containerSelection);
  container.innerHTML = "";

  for (let i = 0; i < gamesArray.length; i++) {
    const game = gamesArray[i];

    const cardHTML = `
      <article class="game-container">
        <div class="card-content">
          <h3>${game.title}</h3>
          <p>${game.description}</p>
        </div>
      </article>
    `;

    container.innerHTML += cardHTML;
  }
}

renderExisitngGames(completedGames, "existing-gamebar");
renderUpcomingGames(upcomingGames, "upcoming-gamebar");
