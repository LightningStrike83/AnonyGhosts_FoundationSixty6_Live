export function darkModeFix() {
    setTimeout(() => {
        const darkModeText = document.querySelectorAll(".dmt")
        let bodyStyle = window.getComputedStyle(document.body);
        let bodyBackground = bodyStyle.backgroundColor

        if (bodyBackground === "rgb(34, 34, 34)") {
            darkModeText.forEach(text => {
                text.style.color = "#ffffff"
            })
        }  
    }, 501);


    
}