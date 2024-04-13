export function addnewEntry() {
    const addEvent = document.querySelector("#admin-add-event")
    const addBlog = document.querySelector("#admin-add-blog")
    const addVolunteer = document.querySelector("#admin-add-volunteer")
    const addCareer = document.querySelector("#admin-add-career")
    const addPartner = document.querySelector("#admin-add-partner")

    function addNewEvent(event) {
        event.preventDefault()
        const url = `https://delilahsinger.ca/foundationsixty6/lumen/public/events/add`
        const thisform = this
        const feedbackArea = document.querySelector("#event-add-feedback")

        const formData = 
        "title=" + thisform.elements.title.value +
        "&date=" + thisform.elements.date.value +
        "&place=" + thisform.elements.place.value +
        "&time=" + thisform.elements.time.value +
        "&description=" + thisform.elements.description.value +
        "&image_filename" + thisform.elements.image_filename.value

        fetch (url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formData
        })
        .then(response => response.json())
        .then(feedback => {
            if (feedback.errors) {
                const obj = feedback.errors
                const value = Object.values(obj)
                const errorMessage = document.createElement("p")

                errorMessage.textContent = "Something went wrong, sorry."

                value.forEach(valueInfo => {
                    const p = document.createElement("p")

                    p.textContent = valueInfo

                    feedbackArea.appendChild(p)
                })
            }
        })
        .catch(error => {
            const errorMessage = document.createElement("p")
            errorMessage.textContent = `Sorry, something went wrong: ${error}`

            feedbackArea.appendChild(errorMessage)
        })
    }

    function addNewBlog(event) {
        event.preventDefault()
        const url = `https://delilahsinger.ca/foundationsixty6/lumen/public/blog_posts/add`
        const thisform = this
        const feedbackArea = document.querySelector("#blog-add-feedback")

        const formData = 
        "title=" + thisform.elements.title.value +
        "&description=" + thisform.elements.description.value +
        "&author=" + thisform.elements.author.value +
        "&date=" + thisform.elements.date.value +
        "&text=" + thisform.elements.text.value +
        "&image_filename" + thisform.elements.image_filename.value

        fetch (url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formData
        })
        .then(response => response.json())
        .then(feedback => {
            if (feedback.errors) {
                const obj = feedback.errors
                const value = Object.values(obj)
                const errorMessage = document.createElement("p")

                errorMessage.textContent = "Something went wrong, sorry."

                value.forEach(valueInfo => {
                    const p = document.createElement("p")

                    p.textContent = valueInfo

                    feedbackArea.appendChild(p)
                })
            }
        })
        .catch(error => {
            const errorMessage = document.createElement("p")
            errorMessage.textContent = `Sorry, something went wrong: ${error}`

            feedbackArea.appendChild(errorMessage)
        })
    }

    function addNewVolunteer(event) {
        event.preventDefault()
        const url = `https://delilahsinger.ca/foundationsixty6/lumen/public/volunteers/add`
        const thisform = this
        const feedbackArea = document.querySelector("#volunteer-add-feedback")

        const formData = 
        "reference=" + thisform.elements.reference.value +
        "&title=" + thisform.elements.title.value +
        "&date=" + thisform.elements.date.value +
        "&location=" + thisform.elements.location.value +
        "&time=" + thisform.elements.time.value +
        "&description=" + thisform.elements.description.value

        fetch (url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formData
        })
        .then(response => response.json())
        .then(feedback => {
            if (feedback.errors) {
                const obj = feedback.errors
                const value = Object.values(obj)
                const errorMessage = document.createElement("p")

                errorMessage.textContent = "Something went wrong, sorry."

                value.forEach(valueInfo => {
                    const p = document.createElement("p")

                    p.textContent = valueInfo

                    feedbackArea.appendChild(p)
                })
            }
        })
        .catch(error => {
            const errorMessage = document.createElement("p")
            errorMessage.textContent = `Sorry, something went wrong: ${error}`

            feedbackArea.appendChild(errorMessage)
        })
    }

    function addNewCareer(event){
        event.preventDefault()
        const url = `https://delilahsinger.ca/foundationsixty6/lumen/public/careers/add`
        const thisform = this
        const feedbackArea = document.querySelector("#career-add-feedback")

        const formData = 
        "reference=" + thisform.elements.reference.value +
        "&title=" + thisform.elements.title.value +
        "&description=" + thisform.elements.description.value

        fetch (url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formData
        })
        .then(response => response.json())
        .then(feedback => {
            if (feedback.errors) {
                const obj = feedback.errors
                const value = Object.values(obj)
                const errorMessage = document.createElement("p")

                errorMessage.textContent = "Something went wrong, sorry."

                value.forEach(valueInfo => {
                    const p = document.createElement("p")

                    p.textContent = valueInfo

                    feedbackArea.appendChild(p)
                })
            }
        })
        .catch(error => {
            const errorMessage = document.createElement("p")
            errorMessage.textContent = `Sorry, something went wrong: ${error}`

            feedbackArea.appendChild(errorMessage)
        })
    }

    function addNewPartner(event) {
        event.preventDefault()
        const url = `https://delilahsinger.ca/foundationsixty6/lumen/public/partners/add`
        const thisform = this
        const feedbackArea = document.querySelector("#partner-add-feedback")

        const formData = 
        "name=" + thisform.elements.name.value +
        "&page_url=" + thisform.elements.page_url.value +
        "&image_url=" + thisform.elements.image_url.value

        fetch (url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formData
        })
        .then(response => response.json())
        .then(feedback => {
            if (feedback.errors) {
                const obj = feedback.errors
                const value = Object.values(obj)
                const errorMessage = document.createElement("p")

                errorMessage.textContent = "Something went wrong, sorry."

                value.forEach(valueInfo => {
                    const p = document.createElement("p")

                    p.textContent = valueInfo

                    feedbackArea.appendChild(p)
                })
            }
        })
        .catch(error => {
            const errorMessage = document.createElement("p")
            errorMessage.textContent = `Sorry, something went wrong: ${error}`

            feedbackArea.appendChild(errorMessage)
        })
    }

    addEvent.addEventListener("submit", addNewEvent)
    addBlog.addEventListener("submit", addNewBlog)
    addVolunteer.addEventListener("submit", addNewVolunteer)
    addCareer.addEventListener("submit", addNewCareer)
    addPartner.addEventListener("submit", addNewPartner)
}