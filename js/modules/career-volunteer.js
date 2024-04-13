export function careervolunteer() {
    const catchHandle = document.querySelector(".catch-handle")
    const careerList = Vue.createApp({
        created() {
            fetch('https://delilahsinger.ca/foundationsixty6/lumen/public/careers')
            .then(response => response.json())
            .then(career => {
                catchHandle.innerHTML = ""
                this.careerList = career
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
                careerList: [],
                reference: "",
                title: "",
                description: "",
            }
        }
    })

    const volunteerList = Vue.createApp({
        created() {
            fetch('https://delilahsinger.ca/foundationsixty6/lumen/public/volunteers')
            .then(response => response.json())
            .then(volunteer => {
                catchHandle.innerHTML = ""
                this.volunteerList = volunteer
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
                volunteerList: [],
                reference: "",
                title: "",
                description: "",
                location: "",
                date: "",
                time: "",
            }
        }
    })

    careerList.mount("#career-opportunities")
    volunteerList.mount("#volunteer-opportunities")
}