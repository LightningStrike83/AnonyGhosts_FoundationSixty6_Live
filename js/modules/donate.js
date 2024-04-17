export function donateVideo() {
    const counsellorImage = document.querySelector("#counsellor-video")
    const youthImage = document.querySelector("#youth-video")
    const video = document.querySelector("#video-source")
    const videoCon = document.querySelector("#donate-video-con")

    const statistics = document.querySelector("#statistics-con")

    let stat_info = [
        {
            image: "search.svg",
            fact: "It's easier for people with addiction problems to find help",
            action: "Foundation Sixty6 wants to seek help for people before it goes that far"
        },

        {
            image: "adult.svg",
            fact: "The risk of more serious / negative health outcomes increases when patients age out of youth programs without an established healthcare plan.",
            action: "Foundation Sixty6 wants to give stability and provide a support network to youths that age out of those programs and help reduce that risk."
        },

        {
            image: "cash.svg",
            fact: "The cost to provide adequate privately funded counselling and physician mental healthcare is approximately $8500 a year.",
            action: "Foundation Sixty6 wants to connect and support families with those struggles."
        },
    ]

    function changeVideo() {
        if (this.id === "counsellor-video") {
            videoCon.style.display = "block"
            video.src = "video/counsellor-video.mp4"
            video.poster = "images/video-posters/counsellor.jpg"
        } else if (this.id === "youth-video") {
            videoCon.style.display = "block"
            video.src = "video/youth-video.mp4"
            video.poster = "images/video-posters/youth.jpg"
        }
    }

    function displayStatistics() {
        stat_info.forEach(stat => {
            const div = document.createElement("div")
            const icon = document.createElement("img")
            const textDiv = document.createElement("div")
            const fact = document.createElement("p")
            const action = document.createElement("p")

            icon.src = `images/icons/${stat.image}`
            fact.textContent = stat.fact
            action.textContent = stat.action

            fact.setAttribute("class", "dmt")
            action.setAttribute("class", "action-text")

            div.setAttribute("class", "col-span-full stat-div")

            textDiv.appendChild(fact)
            textDiv.appendChild(action)
            div.appendChild(icon)
            div.appendChild(textDiv)
            statistics.appendChild(div)
        })
    }

    displayStatistics()

    counsellorImage.addEventListener("click", changeVideo)
    youthImage.addEventListener("click", changeVideo)
}