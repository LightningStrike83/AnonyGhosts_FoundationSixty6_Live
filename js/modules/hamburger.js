export function hamburger() {
    gsap.registerPlugin(ScrollToPlugin);
    const hamMenu = document.querySelector("#hamburger-menu-icon")
    const closeButton = document.querySelector(".lb-close")
    const mobileLightbox = document.querySelector(".nav-lightbox")

    function openMobileNav() {
        mobileLightbox.style.display = "block"
        gsap.to(window, {duration: 0.75, scrollTo: "#nav-lightbox"})
    }

    function closeMobileNav() {
        mobileLightbox.style.display = "none"
    }

    hamMenu.addEventListener("click", openMobileNav)
    closeButton.addEventListener("click", closeMobileNav)
}

    