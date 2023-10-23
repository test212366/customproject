import {loop, $keyboard} from "./utils";

//createWrapperKeyboard
//TODO: realiz to class
export function createKeyboard() {
    const $wrapper = document.createElement('div')
    $wrapper.classList.add('wrapper')
    $wrapper.insertAdjacentHTML('afterbegin', `
            <div class="items">
                <button class="btn delete"><=</button>
                <button class="btn Up">Up</button>
            </div>
    `)
    $keyboard.appendChild($wrapper)
    createItem('first', 12)
    createItem('second', 11)
    createItem('last', 9)
}
const firstItem = 'qwertyuiop[]',
    secondItem = `asdfghjkl;\'`,
    lastItem = 'zxcvbnm, '
//create letters for keyboard
function createItem(selector, value) {
    const $section = document.createElement('div')
    $section.classList.add(selector)
    const $items = document.querySelector('.items')
    if(selector == 'first') {
       loop(firstItem, $section, value)
    } else if(selector == 'second') {
        loop(secondItem, $section, value)
    } else if(selector == 'last') {
       loop(lastItem, $section, value)
    }
    $items.appendChild($section)
}
