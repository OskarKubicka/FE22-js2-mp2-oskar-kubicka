
import { Gui } from "./modules/gui.js"
const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const gui = new Gui(form.childNodes[3].value, form.childNodes[5].value)
    

})



