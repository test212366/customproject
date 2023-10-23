//utils functions - helper functions
export const $keyboard = document.querySelector('.keyboard')

export function loop(someItem, $section, value) {
    for (let i = 0; i < value; i++) {
        const item = document.createElement('button')
        item.classList.add('btn')
        item.classList.add('item')
        item.textContent = someItem[i]
        $section.appendChild(item)
    }
}