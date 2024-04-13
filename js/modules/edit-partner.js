export function editPartner() {
    const partnerForm = document.querySelector("#edit-partner-form")
    const feedbackArea = document.querySelector("#partner-feedback-area")
    var search = window.location.search
    var partnerID =  search.replace(/[\D]/g, '')

    const partnerPosts = Vue.createApp({
        created(){
            fetch(`https://delilahsinger.ca/foundationsixty6/lumen/public/partners/${partnerID}`)
            .then(response => response.json())
            .then(partner => {
                this.partnerInfo = partner
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
                partnerInfo: [],
                id: "",
                name: "",
                page_url: "",
            }
        },
    })

    function updatePartner(event) {
        event.preventDefault()
        const url = `https://delilahsinger.ca/foundationsixty6/lumen/public/partners/edit/${partnerID}`
        const thisform = this

        const formData = 
        "name=" + thisform.elements.name.value +
        "&page_url=" + thisform.elements.page_url.value

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

    partnerPosts.mount("#edit-partner-form")
    partnerForm.addEventListener("submit", updatePartner)
}