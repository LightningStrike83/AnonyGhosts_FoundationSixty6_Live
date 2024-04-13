export function blogOne() {
    const catchHandle = document.querySelector(".catch-handle")
    var search = window.location.search
    var blogID =  search.replace(/[\D]/g, '')

    const blogOne = Vue.createApp({
        created() {
            fetch(`https://delilahsinger.ca/foundationsixty6/lumen/public/blog_posts/${blogID}`)
            .then(response => response.json())
            .then(blog => {
                catchHandle.innerHTML = ""
                this.blogPost = blog;
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
                blogPost: [],
                id: "",
                title: "",
                description: "",
                author: "",
                date: "",
                text: "",
                image_filename: "",
            }
        },
    })

    blogOne.mount("#app")

    function paragraphBreak() {
        const infoText = document.querySelector("#info-text")
        fetch (`https://delilahsinger.ca/foundationsixty6/lumen/public/blog_posts/${blogID}`)
        .then(response => response.json())
        .then(text => {
            infoText.innerHTML = text.text
        })
    }

    paragraphBreak()
}