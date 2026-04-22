// Game data array - add to this when you have new games
const completedGames = [
    {
        title: "Project Village",
        description: "This game is about managing AI to maintain building integrity by assigning them to buildings for repair.",
        image: "../Assets/Images/village-sim.jpg",
        webglLink: "#",  // Add your WebGL link here later
        altText: "Screenshot from Project Village"
    },
    {
        title: "Previous Game 2",
        description: "Description of your second completed game.",
        image: "../Assets/Images/game2-placeholder.jpg",
        webglLink: "#",
        altText: "Screenshot from Game 2"
    }
    // Add more games here as you build them
];

const upcomingGames = [
    {
        title: "AI Soccer",
        description: "This game will apply machine learning concepts to pit 2 AI players against each other. Unity has built-in ML agents I want to explore.",
        image: "../Assets/Images/ai-soccer-placeholder.jpg",
        webglLink: "#",
        altText: "Concept art for AI Soccer"
    }
    // Add more upcoming projects here
];

// Function to create a game card HTML
function createGameCard(game) {
    return `
        <article class="game-container">
            <a href="${game.webglLink}">
                <img src="${game.image}" alt="${game.altText}">
                <div class="card-content">
                    <h3>${game.title}</h3>
                    <p>${game.description}</p>
                </div>
            </a>
        </article>
    `;
}

// Function to render games to a container
function renderGames(gamesArray, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let html = "";
    for (let i = 0; i < gamesArray.length; i++) {
        html += createGameCard(gamesArray[i]);
    }
    container.innerHTML = html;
}

// Render everything when page loads
document.addEventListener("DOMContentLoaded", function() {
    renderGames(completedGames, "completed-games-container");
    renderGames(upcomingGames, "upcoming-games-container");
});