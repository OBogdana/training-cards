let createGameButton = document.getElementById("createGameButton");

createGameButton.addEventListener("click", () => {
    let gameName = prompt("Enter game name:");
    let game = new Game(gameName);
});