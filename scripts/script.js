import { burgerNavActive, burgerNavInactive, interactivClipBoardCopy, interactiveNav } from "./functions/functions.js"
import { mainSection } from "./projects-html-scripts/projects-html-scripts.js"

function main() {
    
    interactivClipBoardCopy()
    burgerNavActive()
    burgerNavInactive()
    interactiveNav()

    mainSection()    

}

document.addEventListener("DOMContentLoaded", main)