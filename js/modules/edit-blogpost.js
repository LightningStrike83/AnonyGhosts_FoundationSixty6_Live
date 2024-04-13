export function editBlogPost() {
    const blogPostForm = document.querySelector("#edit-blogpost-form")
    const feedbackArea = document.querySelector("#blog-post-feedback-area")
    var search = window.location.search
    var blogPostID =  search.replace(/[\D]/g, '')

    const blogPosts = Vue.createApp({
        created(){
            fetch(`https://delilahsinger.ca/foundationsixty6/lumen/public/blog_posts/${blogPostID}`)
            .then(response => response.json())
            .then(blogpost => {
                this.blogpostInfo = blogpost
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
                blogpostInfo: [],
                id: "",
                title: "",
                description: "",
                author: "",
                text: ""
            }
        },
    })

    function updateBlogPost(event) {
        event.preventDefault()
        const url = `https://delilahsinger.ca/foundationsixty6/lumen/public/blog_posts/edit/${partnerID}`
        const thisform = this

        const formData = 
        "title=" + thisform.elements.title.value +
        "&description=" + thisform.elements.description.value +
        "&author=" + thisform.elements.author.value +
        "&date=" + thisform.elements.date.value +
        "&text=" + thisform.elements.text.value

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

    blogPosts.mount("#edit-blogpost-form")
    blogPostForm.addEventListener("submit", updateBlogPost)
}