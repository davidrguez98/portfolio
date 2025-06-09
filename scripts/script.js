import { burgerNavActive, burgerNavInactive, interactiveClipBoardCopy, interactiveNav } from "./functions/functions.js"
import { mainSection } from "./projects-html-scripts/projects-html-scripts.js"

function main() {
    
    mainSection()        
    interactiveClipBoardCopy()
    burgerNavActive()
    burgerNavInactive()
    interactiveNav()

}

document.addEventListener("DOMContentLoaded", main)