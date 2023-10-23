import {registerButton} from "./registerButton";
import {$keyboard} from "./utils";
let cI = false
//cI - currentInput
document.body.addEventListener('click', e => {
    let i = e.target.classList
    // this if & else not code profit
    if (i == 'input') {
        cI = e.target
        $keyboard.classList.add('active')
    } else if(i == 'btn item') {
        registerButton(cI,e.target.textContent)
    } else if(i == 'btn Up') {
        registerButton(cI, 'up')
    } else if(i == 'btn delete') {
        registerButton(cI, 'delete')
    }
    if (i == 'input' || i == 'keyboard active' || i == 'items' || i == 'first' || i == 'second' || i == 'last'|| i == 'btn item' || i == 'btn Up' || i == 'btn delete') {
        $keyboard.classList.add('active')
    } else {
        $keyboard.classList.remove('active')
    }

})