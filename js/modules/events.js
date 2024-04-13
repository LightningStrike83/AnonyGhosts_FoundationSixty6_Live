export function eventInfo() {
    const catchHandle = document.querySelector(".catch-handle")
    const eventPosts = Vue.createApp({
        created() {
            fetch('https://delilahsinger.ca/foundationsixty6/lumen/public/events')
            .then(response => response.json())
            .then(event => {
                catchHandle.innerHTML = ""
                this.eventList = event;
            })
            .catch(error => {
                let errortext = document.createElement("p")

                catchHandle.innerHTML = ""
                catchHandle.style.display = "block"

                errortext.textContent = error

                catchHandle.appendChild(errortext)
            })
        },

        data() {
            return {
                eventList: [],
                id: "",
                title: "",
                place: "",
                description: "",
                date: "",
                time: "",
                image_filename: ""
            }
        }
    })

    eventPosts.mount("#event-info-con")
}