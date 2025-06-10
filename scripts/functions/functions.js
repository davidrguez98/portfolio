//Copia en el portapapeles el correo
function clipBoardCopy(text) {
    navigator.clipboard.writeText(text)
}

export function interactiveClipBoardCopy() {
    document.querySelectorAll("#copyEmailBtn").forEach(btn => {
        btn.addEventListener("click", function() {
            
            const originalText = btn.textContent
            clipBoardCopy('ropeda98@gmail.com')
            btn.textContent = "¡Copiado con éxito!"

            setTimeout(() => {
                btn.textContent = originalText
            }, 2000)
        })
    })
}

//Activa menú hamburguesa
export function burgerNavActive() {
    document.querySelector(".burgerMenu").addEventListener("click", () => {
        document.querySelector("#nav").classList.add("visible")
    })
}


//Desactiva menú hamburguesa
export function burgerNavInactive() {
    document.querySelector("#closeButton").addEventListener("click", () => {
        document.querySelector("#nav").classList.remove("visible")
    })

    document.querySelectorAll(".nav-link").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector("#nav").classList.remove("visible")
        })
    })
}

//Nav interactiva cuando se hace scroll
export function interactiveNav() {
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector("nav");
        if (window.scrollY > 10) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    })
}

export function changeLinkProject() {
    const projectLinkTwo = document.querySelector('#projectLink-two')
    const tabButtonFSTwo = document.querySelector('#myTab-two #fullStack-tab-two')
    const tabButtonBETwo = document.querySelector('#myTab-two #backEnd-tab-two')

    const projectLinkFour = document.querySelector('#projectLink-four')
    const tabButtonFSFour = document.querySelector('#myTab-four #fullStack-tab-four')
    const tabButtonBEFour = document.querySelector('#myTab-four #backEnd-tab-four')
    

    tabButtonBETwo.addEventListener("click", function() {
        const newHref = tabButtonBETwo.getAttribute("data-href")
        projectLinkTwo.setAttribute("href", newHref)
    })
    
    tabButtonFSTwo.addEventListener("click", function() {
        const newHref = tabButtonFSTwo.getAttribute("data-href")
        projectLinkTwo.setAttribute("href", newHref)
    })

    tabButtonBEFour.addEventListener("click", function() {
        const newHref = tabButtonBEFour.getAttribute("data-href")
        projectLinkFour.setAttribute("href", newHref)
    })
    
    tabButtonFSFour.addEventListener("click", function() {
        const newHref = tabButtonFSFour.getAttribute("data-href")
        projectLinkFour.setAttribute("href", newHref)
    })

}