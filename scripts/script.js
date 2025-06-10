import { mainSection } from "./projects-html-scripts/projects-html-scripts.js"
import { burgerNavActive, burgerNavInactive, changeLinkProject, interactiveClipBoardCopy, interactiveNav } from "./functions/functions.js"

function main() {
    
    mainSection()        
    interactiveClipBoardCopy()
    burgerNavActive()
    burgerNavInactive()
    interactiveNav()
    changeLinkProject()

}

document.addEventListener("DOMContentLoaded", main)