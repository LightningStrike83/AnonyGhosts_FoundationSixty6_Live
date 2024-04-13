export function aboutPartners() {
    const catchHandle = document.querySelector(".catch-handle")
    const partnerDisplay = Vue.createApp ({
        created() {
            fetch('https://delilahsinger.ca/foundationsixty6/lumen/public/partners')
            .then(response => response.json())
            .then(partner => {
                catchHandle.innerHTML = ""
                this.partnerList = partner
            })
            .catch(error => {
                const catchHandle = document.querySelector(".catch-handle")
                let errortext = document.createElement("p")

                catchHandle.innerHTML = ""
                catchHandle.style.display = "block"

                errortext.textContent = error

                catchHandle.appendChild(errortext)
            })
        },

        data() {
            return {
                partnerList: [],
                name: "",
                image_url: "",
                page_url: ""
            }
        }
    })

    partnerDisplay.mount("#partner-con")
}