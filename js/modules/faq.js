export function FAQ() {

    let questions = [
        {
            question: "What is Chronic Mental Illness?",
            answer: "Chronic Mental Illness refers to long-term conditions where individuals experience persistent symptoms of mental health challenges. These conditions typically require ongoing treatment and support to help individuals manage their symptoms and improve their overall well-being over time."
        },

        {
            question: "Who are Foundation Sixty6?",
            answer: "The parents and supporters of a child who has experienced significant barriers in accessing adequate mental healthcare for severe conditions that have recently been diagnosed under the umbrella of psychotic depression"
        },

        {
            question: "Why Sixty6?",
            answer: "66 is a number with close personal ties with the Hagerty family; as it was Caelan's number when he used to play football. The reason why it's written as Sixty6 is to have significance to the number of members of the Foundation. The three Hagery family members, Stuart du Kamp, Russel Levangie, and you!"
        },

        {
            question:  "How do I track my shirt in the mail?",
            answer: "Contact us and we'll send you a tracking number if we have one!"
        }
    ]

    function questionPlacement () {
        const faqArea = document.querySelector("#faq-questions")
        let div = document.createElement("div")
        let i = 0


        div.setAttribute('class', "col-span-full m-col-start-2 m-col-end-12 question-con")

        questions.forEach(question => {
            let h3 = document.createElement("h3")
            let p = document.createElement("p")
            let qDivContent = document.createElement("div")
            let qDiv = document.createElement("div")

            h3.textContent = question.question
            p.textContent = "+"

            qDivContent.setAttribute('class', "q-text")
            qDiv.setAttribute('class', 'info-con')
            qDivContent.addEventListener('click', expandAnswer)
            p.setAttribute("class", `expand-icon${i}`)
            qDivContent.setAttribute('data-div', i++)

            qDiv.appendChild(h3)
            qDiv.appendChild(p)
            qDivContent.appendChild(qDiv)
            div.appendChild(qDivContent)
        })

        faqArea.appendChild(div)
    }

    function expandAnswer() {
        let clickData = this.dataset.div
        let plus = document.querySelector(`.expand-icon${clickData}`)
        //let infoCon = document.querySelectorAll(".q-text")
        //let target = infoCon.dataset.div
            if (this.classList.contains("clicked")) {
                let answer = document.querySelector(`.answer${clickData}`)
                this.classList.remove("clicked")
                answer.remove()

                plus.textContent= "+"

    
            } else {
                let p = document.createElement("p")

                this.classList.add("clicked")
                p.textContent = questions[clickData].answer
                p.setAttribute("class", `answer answer${clickData}`)

                plus.textContent= "-"

                this.appendChild(p)
            }
    }

    questionPlacement();
}