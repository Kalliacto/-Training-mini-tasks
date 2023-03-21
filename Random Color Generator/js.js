const squareOne = document.querySelector('.square_one');
const jsColor = document.querySelector('.js-color');
const jsBtn = document.querySelector('.js-btn');
const hex = '0123456789ABCDEF';

let randomColor = '#';

const getRandomColor = () => {
    randomColor = '#';
    for(let i = 0; i < 6; i++) {
        // randomColor = randomColor + hex[Math.floor(Math.random() * hex.length)];
        randomColor += hex[Math.floor(Math.random() * hex.length)];
    }
    console.log(randomColor);
};

jsBtn.addEventListener('click', () => {
    getRandomColor();
    squareOne.style.background = randomColor;
    jsColor.innerHTML = randomColor;
});


const squareTwo = document.querySelector('.square_two');