export function heroHeader() {
    const heroText = document.querySelector("#home-hero-text")
    const supportText = document.querySelector(".home-hero-supplementary-text")
    const heroImage = document.querySelector("#home-hero")
    const heroLink = document.querySelector("#home-hero-link")
    let i = 0

    //const interval = setInterval(changehero, 6000)

    const leftArrow = document.querySelector("#left-arrow")
    const rightArrow = document.querySelector("#right-arrow")

    let heroinfo = [
        {
            heroText: "Building Support for Youth Mental Health",
            supportText: "We are Foundation Sixty6, a beacon of hope for youth mental health, dedicated to bridging the gaps in mental health services, and fostering a future of resilience and well-being.",
            background: "hp.png",
            link: "index.html"
        },

        {
            heroText: "Learn About The Foundation",
            supportText: "Explore the Foundation's roots, to glimpse into the hearts and souls of the people that wanted to make a difference and help provide to families and youth in need",
            background: "foundation.png",
            link: "about.html"
        },

        {
            heroText: "Events Happening Now",
            supportText: "Take a gander at all of the events being hosted by Foundation Sixty6, to help promote community and to help in our fight against mental health struggles",
            background: "celebrate.jpg",
            link: "events.html"
        }
    ]

    function changehero() {
        heroText.textContent = heroinfo[i].heroText
        supportText.textContent = heroinfo[i].supportText
        heroImage.style.backgroundImage = `url(images/hero-images/${heroinfo[i].background})`
        heroLink.href = heroinfo[i].link

        i++

        if (i >= heroinfo.length) {
            i = 0
        }
    }

    changehero()

    function previousHero() {
        i++

        if (i >= heroinfo.length) {
            i = 0
        }

        changehero()
    }

    leftArrow.addEventListener("click", previousHero)
    rightArrow.addEventListener("click", changehero)
}