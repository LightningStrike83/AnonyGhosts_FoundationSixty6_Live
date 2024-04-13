export function editVolunteer() {
    const volunteerForm = document.querySelector("#edit-volunteer-form")
    const feedbackArea = document.querySelector("#volunteer-feedback-area")
    var search = window.location.search
    var volunteerID =  search.replace(/[\D]/g, '')

    const volunteerInfo = Vue.createApp({
        created(){
            fetch(`https://delilahsinger.ca/foundationsixty6/lumen/public/volunteers/${volunteerID}`)
            .then(response => response.json())
            .then(volunteer => {
                this.volunteerInfo = volunteer
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
                volunteerInfo: [],
                id: "",
                reference: "",
                title: "",
                date: "",
                location: "",
                time: "",
                description: ""
            }
        },
    })

    function updateVolunteer(event) {
        event.preventDefault()
        const url = `https://delilahsinger.ca/foundationsixty6/lumen/public/volunteers/edit/${volunteerID}`
        const thisform = this

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

    volunteerInfo.mount("#edit-volunteer-form")
    volunteerForm.addEventListener("submit", updateVolunteer)
}