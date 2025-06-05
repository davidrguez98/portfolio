function clipBoardCopy(text) {
    navigator.clipboard.writeText(text)
}

function main() {

    document.querySelectorAll("#copyEmailBtn").forEach(btn => {
        btn.addEventListener("click", function() {
            clipBoardCopy('ropeda98@gmail.com')
        })
    })
    

    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 10) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    })


}

document.addEventListener("DOMContentLoaded", main)