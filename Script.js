const searchBar = document.getElementById("search-bar");
const gameIcons = document.querySelectorAll(".game-icon");

searchBar.addEventListener("input", (event) => {
    const searchText = event.target.value.toLowerCase();

    gameIcons.forEach((gameIcon, index) => {
        const gameName = gameIcon.querySelector("img").alt.toLowerCase();
        if (gameName.includes(searchText)) {
            gameIcon.classList.remove("hide");
            gameIcon.style.order = index;
        } else {
            gameIcon.classList.add("hide");
        }
    });
});