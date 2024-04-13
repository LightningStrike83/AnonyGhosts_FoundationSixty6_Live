export function adminScripts() {
    const baseURL = "https://delilahsinger.ca/foundationsixty6/lumen/public/"
    const eventDiv = document.querySelector("#event-list")
    const blogDiv = document.querySelector("#blog-list")
    const volunteerDiv = document.querySelector("#volunteer-list")
    const careerDiv = document.querySelector("#career-list")
    const partnerDiv = document.querySelector("#partner-list")
    const seeAll = document.querySelectorAll(".see-more p")

    function fetchEvents() {
        fetch(`${baseURL}events`)
        .then(result => result.json())
        .then(function(result){
            result.forEach(result => {
                let div = document.createElement("div")
                let id = document.createElement("p")
                let title = document.createElement("p")
                let date = document.createElement("p")
                let location = document.createElement ("p")
                let time = document.createElement("p")
                let description = document.createElement("p")
                let actionDiv = document.createElement("div")
                let editLink = document.createElement("a")
                let deleteLink = document.createElement("a")

                div.setAttribute("class", "admin-info-div")
                actionDiv.setAttribute("class", "admin-action-div")

                id.textContent = `ID: ${result.id}`
                title.textContent = `Title: ${result.title}`
                date.textContent = `Date: ${result.date}`
                location.textContent = `Location: ${result.place}`
                time.textContent = `Time: ${result.time}`
                description.textContent = `Description: ${result.description}`

                editLink.textContent = "Edit"
                editLink.href = `/admin/edit-event.html?id=${result.id}`
                deleteLink.textContent = "Delete"
                deleteLink.href = `${baseURL}events/delete/${result.id}`

                actionDiv.appendChild(editLink)
                actionDiv.appendChild(deleteLink)

                div.appendChild(id)
                div.appendChild(title)
                div.appendChild(date)
                div.appendChild(location)
                div.appendChild(time)
                div.appendChild(description)
                div.appendChild(actionDiv)
                eventDiv.appendChild(div)
            })
        })
        .catch()
    }

    function fetchBlogs() {
        fetch(`${baseURL}blog_posts`)
        .then(result => result.json())
        .then(function(result){
            result.forEach(result => {
                let div = document.createElement("div")
                let id = document.createElement("p")
                let title = document.createElement("p")
                let author = document.createElement("p")
                let date = document.createElement("p")
                let description = document.createElement("p")
                let text = document.createElement("p")
                let actionDiv = document.createElement("div")
                let editLink = document.createElement("a")
                let deleteLink = document.createElement("a")

                div.setAttribute("class", "admin-info-div")
                actionDiv.setAttribute("class", "admin-action-div")

                editLink.textContent = "Edit"
                editLink.href = `/admin/edit-blogpost.html?id=${result.id}`
                deleteLink.textContent = "Delete"
                deleteLink.href = `${baseURL}blogs/delete/${result.id}`

                id.textContent = `ID: ${result.id}`
                title.textContent = `Title: ${result.title}`
                author.textContent = `Author: ${result.author}`
                date.textContent = `Date: ${result.date}`
                description.textContent = `Text: ${result.description}`
                text.textContent = `Description: ${result.text}`

                actionDiv.appendChild(editLink)
                actionDiv.appendChild(deleteLink)

                div.appendChild(id)
                div.appendChild(title)
                div.appendChild(description)
                div.appendChild(author)
                div.appendChild(date)
                div.appendChild(text)
                div.appendChild(actionDiv)
                blogDiv.appendChild(div)
            })
        })
        .catch()
    }

    function fetchVolunteers() {
        fetch(`${baseURL}volunteers`)
        .then(result => result.json())
        .then(function(result){
            result.forEach(result => {
                let div = document.createElement("div")
                let id = document.createElement("p")
                let reference = document.createElement("p")
                let title = document.createElement("p")
                let description = document.createElement("p")
                let location = document.createElement("p")
                let date = document.createElement("p")
                let time = document.createElement("p")
                let actionDiv = document.createElement("div")
                let editLink = document.createElement("a")
                let deleteLink = document.createElement("a")

                div.setAttribute("class", "admin-info-div")
                actionDiv.setAttribute("class", "admin-action-div")

                editLink.textContent = "Edit"
                editLink.href = `/admin/edit-volunteer.html?id=${result.id}`
                deleteLink.textContent = "Delete"
                deleteLink.href = `${baseURL}volunteers/delete/${result.id}`

                reference.textContent = `Reference #: ${result.reference}`
                title.textContent = `Title: ${result.title}`
                location.textContent = `Location: ${result.location}`
                date.textContent = `Date: ${result.date}`
                time.textContent = `Time: ${result.time}`
                description.textContent = `Description: ${result.description}`

                actionDiv.appendChild(editLink)
                actionDiv.appendChild(deleteLink)
                
                div.appendChild(reference)
                div.appendChild(title)
                div.appendChild(location)
                div.appendChild(time)
                div.appendChild(description)
                div.appendChild(actionDiv)
                volunteerDiv.appendChild(div)
            })
        })
        .catch()
    }

    function fetchCareers() {
        fetch(`${baseURL}careers`)
        .then(result => result.json())
        .then(function(result){
            result.forEach(result => {
                let div = document.createElement("div")
                let id = document.createElement("p")
                let reference = document.createElement("p")
                let title = document.createElement("p")
                let description = document.createElement("p")
                let actionDiv = document.createElement("div")
                let editLink = document.createElement("a")
                let deleteLink = document.createElement("a")

                reference.textContent = `Reference #: ${result.reference}`
                title.textContent = `Title: ${result.title}`
                description.textContent = `Description: ${result.description}`

                div.setAttribute("class", "admin-info-div")
                actionDiv.setAttribute("class", "admin-action-div")

                editLink.textContent = "Edit"
                editLink.href = `/admin/edit-career.html?id=${result.id}`
                deleteLink.textContent = "Delete"
                deleteLink.href = `${baseURL}careers/delete/${result.id}`

                actionDiv.appendChild(editLink)
                actionDiv.appendChild(deleteLink)

                div.appendChild(reference)
                div.appendChild(title)
                div.appendChild(description)
                div.appendChild(actionDiv)
                careerDiv.appendChild(div)
            })
        })
        .catch()
    }

    function fetchPartners() {
        fetch(`${baseURL}partners`)
        .then(result => result.json())
        .then(function(result){
            result.forEach(result => {
                let div = document.createElement("div")
                let id = document.createElement("p")
                let name = document.createElement("p")
                let link = document.createElement("a")
                let actionDiv = document.createElement("div")
                let editLink = document.createElement("a")
                let deleteLink = document.createElement("a")

                div.setAttribute("class", "admin-info-div")
                actionDiv.setAttribute("class", "admin-action-div")

                editLink.textContent = "Edit"
                editLink.href = `/admin/edit-partner.html?id=${result.id}`
                deleteLink.textContent = "Delete"
                deleteLink.href = `${baseURL}partners/delete/${result.id}`

                id.textContent = `ID: ${result.id}`
                name.textContent = `Name: ${result.name}`
                link.textContent = `Link: ${result.page_url}`
                link.href = result.page_url
                link.setAttribute("class", "partner-link")

                actionDiv.appendChild(editLink)
                actionDiv.appendChild(deleteLink)

                div.appendChild(id)
                div.appendChild(name)
                div.appendChild(link)
                div.appendChild(actionDiv)
                partnerDiv.appendChild(div)
            })
        })
        .catch()
    }

    fetchEvents()
    fetchBlogs()
    fetchVolunteers()
    fetchPartners()
    fetchCareers()

    function displayInfo() {
        const dataLink = this.dataset.member
        const adminInfo = document.querySelectorAll(`.admin-info-${dataLink}`)

        if (this.classList.contains("admin-click")) {
            this.classList.remove("admin-click")
            adminInfo.forEach(info => info.style.display = "none")
        } else {
            this.classList.add("admin-click")
            adminInfo.forEach(info => info.style.display = "block")
        }
    }

    seeAll.forEach(see => see.addEventListener("click", displayInfo))
}