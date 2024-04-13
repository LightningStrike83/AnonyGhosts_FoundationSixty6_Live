export function submitNewsletter() {
    const newsletterForm = document.querySelector(".newsletter-sign-up")
    const newsFeedback = document.querySelector("#newsletter-feedback")
    const newsConfirm = document.querySelector("#newsletter-confirm")

    function newsletterSignUp(event) {
        event.preventDefault()
        const url = "https://delilahsinger.ca/foundationsixty6/lumen/public/subscribe"
        const thisform = this

        const formData = 
        "email=" + thisform.elements.email.value

        fetch (url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formData
        })
        .then(response => response.json())
        .then(feedback => {
            newsFeedback.innerHTML = ""
            newsConfirm.innerHTML = ""

            if (feedback.errors) {
                const obj = feedback.errors
                const value = Object.values(obj)
                const errorMessage = document.createElement("p")

                errorMessage.textContent = "Our apologies, but something appeared to have gone wrong."
                
                newsFeedback.appendChild(errorMessage)

                value.forEach(valueInfo => {
                    const p = document.createElement("p")

                    p.textContent = valueInfo

                    newsFeedback.appendChild(p)
                })
            } else {
                const thankyou = document.createElement("p")

                thankyou.textContent = "Thank you very much for signing up!"

                newsConfirm.appendChild(thankyou)
            }
        })
        .catch(error => {
            newsConfirm.innerHTML= ""
            newsFeedback.innerHTML = ""

            const errorMessage = document.createElement("p")
            errorMessage.textContent = `Sorry, something went wrong: ${error}`

            newsFeedback.appendChild(errorMessage)
        })
    }

    newsletterForm.addEventListener("submit", newsletterSignUp)
}