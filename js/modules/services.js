export function services() {
    const servicesDiv = document.querySelector("#services-info")

    let servicesInfo = [
        // {
        //     title: "",
        //     icon: "",
        //     desc: "",
        //     link: "",
        // },
        {
            title: "Referrals and Connections",
            icon: "images/chat.svg",
            desc: "We can connect you to someone who can help support you or your family through our network of supports.",
            link: "Contact Us",
            linkpath: "contact.html",
        },

        {
            title: "Resources",
            icon: "images/idea.svg",
            desc: "We can provide resources to help your family's struggle and help educate on the struggles of mental health and what you can do to help support someone who's struggling.",
            link: "Learn More",
            linkpath: "contact.html",
        },

        {
            title: "Community-Based Programs",
            icon: "images/unity.png",
            desc: "Establish residential facilities or community-based programs that offer a supportive environment for individuals with severe mental health conditions.",
            link: "Learn More",
            linkpath: "events.html",
        },

        {
            title: "Education Programs",
            icon: "images/teach.svg",
            desc: "Conduct workshops, seminars, and awareness campaigns to educate the public, schools, and workplaces about mental health issues, reducing stigma, and promoting mental well-being.",
            link: "Learn More",
            linkpath: "career-volunteer.html",
        },

        {
            title: "Employment & Vocational Support",
            icon: "images/employ.svg",
            desc: "Offer programs that help individuals with mental health challenges find and maintain employment, providing vocational training and support.",
            link: "Learn More",
            linkpath: "career-volunteer.html",
        },
    ]

    function servicesInformation() {
        let i = 0

        servicesInfo.forEach (service => {
            let serviceDiv = document.createElement("div")
            let h3 = document.createElement("h3")
            let img = document.createElement("img")
            let p = document.createElement("p")
            let a = document.createElement("a")
            let div = document.createElement("div")

            div.setAttribute("class", "service-begin")
            serviceDiv.setAttribute("class", "col-span-full m-col-span-5 service-area")
            serviceDiv.setAttribute("id", `service-div-${i++}`)
            a.setAttribute("class", "custom-button")
            p.setAttribute("class", "dmt")
            h3.setAttribute("class", "dmt")

            h3.textContent = service.title
            img.src = service.icon
            p.textContent = service.desc
            a.href = service.linkpath
            a.textContent = service.link

            div.appendChild(h3)
            div.appendChild(img)
            serviceDiv.appendChild(div)
            serviceDiv.appendChild(p)
            serviceDiv.appendChild(a)

            servicesDiv.appendChild(serviceDiv)
        })
    }

    servicesInformation()
}