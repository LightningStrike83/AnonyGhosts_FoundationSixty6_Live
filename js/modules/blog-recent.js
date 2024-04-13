export function blogCreationRecent() {
    const catchHandle = document.querySelector(".catch-handle")
    const blogPosts = Vue.createApp({
        created() {
            fetch('https://delilahsinger.ca/foundationsixty6/lumen/public/blog_posts')
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
                name: "",
            }
        },
    })

    blogPosts.mount("#recent-posts")
}