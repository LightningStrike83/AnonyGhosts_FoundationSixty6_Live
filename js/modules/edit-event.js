export function editEvent() {
    const eventForm = document.querySelector("#edit-event-form")
    const feedbackArea = document.querySelector("#event-feedback-area")
    var search = window.location.search
    var eventID =  search.replace(/[\D]/g, '')

    const eventPosts = Vue.createApp({
        created(){
            fetch(`https://delilahsinger.ca/foundationsixty6/lumen/public/events/${eventID}`)
            .then(response => response.json())
            .then(event => {
                console.log(event)
                this.eventInfo = event
            })
            .catch(error => {
                let errortext = document.createElement("p")

                feedbackArea.innerHTML = ""
                errortext.textContent = error

                feedbackArea.appendChild(errortext)
            })
        },

        data() {
            return {
                eventInfo: [],
                id: "",
                title: "",
                date: "",
                place: "",
                time: "",
                description: "",
            }
        },
    })

    function updateEvent(event) {
        event.preventDefault()
        const url = `https://delilahsinger.ca/foundationsixty6/lumen/public/events/edit/${partnerID}`
        const thisform = this

        const formData = 
        "title=" + thisform.elements.title.value +
        "&date=" + thisform.elements.date.value +
        "&place=" + thisform.elements.place.value +
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

    eventPosts.mount("#edit-event-form")
    eventForm.addEventListener("submit", updateEvent)
}