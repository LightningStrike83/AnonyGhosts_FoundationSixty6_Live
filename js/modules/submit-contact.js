export function submitContact() {
    const contactForm = document.querySelector(".contact-form")
    const messageConfirm = document.querySelector("#message-confirm")
    const feedbackArea = document.querySelector("#feedback-area")

    function contactFeedback(event) {
        event.preventDefault()
        const url = "https://delilahsinger.ca/foundationsixty6/lumen/public/contact/add"
        const thisform = this 

        const formData = 
        "full_name=" + thisform.elements.full_name.value +
        "&email=" + thisform.elements.email.value +
        "&subject=" + thisform.elements.subject.value +
        "&message=" + thisform.elements.message.value;

        fetch (url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formData
        })
        .then(response => response.json())
        .then(feedback => {
            feedbackArea.innerHTML= ""
            messageConfirm.innerHTML = ""

            if (feedback.errors) {
                const obj = feedback.errors
                const value = Object.values(obj)
                const errorMessage = document.createElement("p")

                errorMessage.textContent = "Our apologies, but something appeared to have gone wrong."
                
                feedbackArea.appendChild(errorMessage)

                value.forEach(valueInfo => {
                    const p = document.createElement("p")

                    p.textContent = valueInfo

                    feedbackArea.appendChild(p)
                })
            } else {
                const thankyou = document.createElement("p")

                thankyou.textContent = "Thank you very much for your message! We hope to get back to you shortly!"

                messageConfirm.appendChild(thankyou)
            }
        })
        .catch(error => {
            feedbackArea.innerHTML= ""
            messageConfirm.innerHTML = ""

            const errorMessage = document.createElement("p")
            errorMessage.textContent = `Sorry, something went wrong: ${error}`

            feedbackArea.appendChild(errorMessage)
        })
    }

    contactForm.addEventListener("submit", contactFeedback)
}