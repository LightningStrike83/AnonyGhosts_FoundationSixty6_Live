export function editCareer() {
    const careerForm = document.querySelector("#edit-career-form")
    const feedbackArea = document.querySelector("#career-feedback-area")
    var search = window.location.search
    var careerID =  search.replace(/[\D]/g, '')

    const careerPosts = Vue.createApp({
        created(){
            fetch(`https://delilahsinger.ca/foundationsixty6/lumen/public/careers/${careerID}`)
            .then(response => response.json())
            .then(career => {
                this.careerInfo = career
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
                careerInfo: [],
                id: "",
                reference: "",
                title: "",
                description: "",
            }
        },
    })

    function updateCareer(event) {
        event.preventDefault()
        const url = `https://delilahsinger.ca/foundationsixty6/lumen/public/careers/edit/${careerID}`
        const thisform = this

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

    careerPosts.mount("#edit-career-form")
    careerForm.addEventListener("submit", updateCareer)
}