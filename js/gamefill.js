const completedGames = [
  {
    title: "Project Village",
    description:
      "This game is about managing AI to maintain building integrity by assigning them to buildings for repair.",
    image: "../Assets/Images/gamePagePic.jpg",
    webglLink: "../Assets/WebGl builds/Village Management sim/village.html",
    altText: "Screenshot from Project Village game",
  },
  {
    title: "Simple Parkour",
    description:
      "A basic speedrunner where the player has to beat the course in under 2 minutes, has basic movement and a slide mechanic (WASD to move,Left Crtl to slide and Space to Jump, Jump and Space at the same time will result in a lower jump height)",
    image: "#",
    webglLink: "../Assets/WebGl builds/ParkourGame/parkour.html",
    altText: "Screenshot from a parkour game",
  },
  {
    title: "Fish tank",
    description: "A personal project i built for fum ",
    image: "../Assets/Images/fishTank.jpg",
    webglLink: "#",
    altText: "Screenshot from Fish tank game",
  },
  {
    title: "Quick car game",
    description:
      "I built this game for a mini game jam, the prompt was empahsise the connection between action and challenges and we had 3 hours to work on it",
    image: "../Assets/Images/3HourGame.jpg",
    webglLink: "https://github.com/UwaisN7/3-hour-game",
    altText: "Screenshot from the game i built in 3 hours",
  },
  {
    title: "Paddle Game",
    description:
      "This is my second game, it is a paddle game, this was a group project and i worked on the Ai enemies",
    image: "../Assets/Images/paddleGame.jpg",
    webglLink: "#",
    altText: "Screenshot from the paddle game",
  },
  {
    title: "Angela's Mission",
    description:
      "Shoot up a casino from a top down perspective, this was a group project and i built the enemy AI, the fog of war mechanic and the foundation of the shooting, this was also my first ever project (If you do play just click to progress)",
    image: "../Assets/Images/angela'sMission.jpg",
    webglLink: "../Assets/WebGl builds/Angela's mission/angela.html",
    altText: "Screenshot from Angela's Mission game",
  },
];

const upcomingGames = [
  {
    title: "Project Village V2",
    description:
      "This will build upon the above prototype and polish it until it is ready, a personal project.",
  },
  {
    title: "AI soccer players",
    description:
      "I would like to build an NPC driven game wherin 2 teams of AI player soccer use tactics and adjust strategy similar to football manager with a smaller scope ",
  },
  {
    title: "Fish tank v2",
    description:
      "Right now the fish tank is just visual,i would like to add management mechanics to allow the player more agency over their fish ",
  },
  {
    title: "Arcade style Tank simulator",
    description:
      "I would like to build a tank based game around a set of tank scripts i built in my spare time ",
  },
];

function renderExisitngGames(gamesArray, containerSelection) {
  const container = document.getElementById(containerSelection);
  container.innerHTML = "";

  for (let i = 0; i < gamesArray.length; i++) {
    const game = gamesArray[i];

    //ffffffffffffffffffuuuuuuuuuu
    console.log("Game:", game.title);
    console.log("webglLink value:", game.webglLink);
    console.log(
      "Is truthy and not #?",
      game.webglLink && game.webglLink !== "#",
    );

    let cardHTML = "";

    if (game.webglLink && game.webglLink !== "#") {
      cardHTML = `
        <article class="game-container">
          <img src="${game.image}" alt="${game.altText}">
          <div class="card-content">
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <a href="${game.webglLink}" class="play-link" target="_blank">Play Game →</a>
          </div>
        </article>
      `;
    } else {
      cardHTML = `
        <article class="game-container">
          <img src="${game.image}" alt="${game.altText}">
          <div class="card-content">
            <h3>${game.title}</h3>
            <p>${game.description}</p>
          </div>
        </article>
      `;
    }

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
