export function registerButton(currentInput, buttonPush) {
    if (buttonPush == 'delete') {
        if (currentInput.value) {
            let textInCurrentInput = currentInput.value
            textInCurrentInput = textInCurrentInput.toString().slice(0, -1)
            currentInput.value = textInCurrentInput
        }
    } else if(buttonPush == 'Up') {
        let textInCurrentInput = currentInput.value += 'Up'
    } else {
        let textInCurrentInput = currentInput.value += buttonPush
    }

}