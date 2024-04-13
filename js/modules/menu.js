export function clickMenu() {
    const exploreMenu = document.querySelector("#explore-menu")
    const exploreWord = document.querySelector("#explore")

    function openExploreMenu() {
        if (exploreMenu.style.display === "flex") {
            exploreMenu.style.display = "none"
        } else {
            exploreMenu.style.display = "flex"
        }
    }

    exploreWord.addEventListener("click", openExploreMenu)
}