function clipBoardCopy(text) {
    navigator.clipboard.writeText(text)
}

function main() {

    document.querySelectorAll("#copyEmailBtn").forEach(btn => {
        btn.addEventListener("click", function() {
            clipBoardCopy('ropeda98@gmail.com')
        })
    })

    document.querySelector(".burgerMenu").addEventListener("click", () => {
        document.querySelector("#nav").classList.add("visible")
    })

    document.querySelector("#closeButton").addEventListener("click", () => {
        document.querySelector("#nav").classList.remove("visible")
        console.log("kahjsd")

    })

    document.querySelectorAll(".nav-link").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector("#nav").classList.remove("visible")
        })

    })

    window.addEventListener("scroll", function () {
        const navbar = document.querySelector("nav");
        if (window.scrollY > 10) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    })


}

document.addEventListener("DOMContentLoaded", main)