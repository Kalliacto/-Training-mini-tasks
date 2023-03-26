const passwordField = document.querySelector('.js-password__field');
const lengthItem = document.querySelector('.js-length_item');
const lengthRange = document.querySelector('.js-length_range');
const number = document.querySelector('.js-number');
const symbol = document.querySelector('.js-symbol');
const btn = document.querySelector('.js-btn');
const charsNumbers = '0123456789';
const charsSymbols = '!@#$%^&*()[]';

lengthRange.addEventListener('input', () => {
    lengthItem.value = lengthRange.value;
})
lengthItem.addEventListener('input', () => {
    lengthRange.value = lengthItem.value;
})

btn.addEventListener('click', () => {
    let password = '';

    let charsLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(number.checked) {
        charsLetters += charsNumbers;
    }
    if(symbol.checked) {
        charsLetters += charsSymbols;
    }

    for(let i = 0; i < lengthItem.value; i++) {
        password += charsLetters[Math.floor(Math.random()*charsLetters.length)];
    }

    passwordField.innerHTML = password;
})