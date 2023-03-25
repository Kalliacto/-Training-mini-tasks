const text = document.querySelector('.js-text');
const words = document.querySelector('.js-words');
const characters = document.querySelector('.js-characters');
const symbols = document.querySelector('.js-symbols');

text.addEventListener('input', () => {
    words.innerHTML = text.value.trim().split(/\s+/).length;

    if (text.value.length === 0) {
        words.innerHTML = '0';
    }

    characters.innerHTML = text.value.length;

    symbols.innerHTML = text.value.trim().split(/[!@#$%^&*(){}:;'"<>.,?/-]/).length - 1;
})

