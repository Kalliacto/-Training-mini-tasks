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

squareOne.onmousedown = function (event) {
    squareOne.style.position = 'absolute';
    squareOne.style.zIndex = 100;

    document.addEventListener('mousemove', moveElement);

    squareOne.onmouseup = function () {
        squareOne.style.zIndex = 1;
        document.removeEventListener('mousemove', moveElement);

        let squareOne_top = squareOne.getBoundingClientRect().top;
        let squareOne_left = squareOne.getBoundingClientRect().left;
        let squareOne_right = squareOne.getBoundingClientRect().right;
        let squareOne_bottom = squareOne.getBoundingClientRect().bottom;

        let squareTwo_top = squareTwo.getBoundingClientRect().top;
        let squareTwo_left = squareTwo.getBoundingClientRect().left;
        let squareTwo_right = squareTwo.getBoundingClientRect().right;
        let squareTwo_bottom = squareTwo.getBoundingClientRect().bottom;

        if (squareOne_top > squareTwo_top &&
            squareOne_left > squareTwo_left &&
            squareOne_right < squareTwo_right &&
            squareOne_bottom < squareTwo_bottom
        ) {
            squareTwo.style.backgroundColor = getComputedStyle(squareOne).backgroundColor;
            //---------------------или для получения цвета через переменную------------
            // let computedStyle = getComputedStyle(square);
            // squareBig.style.backgroundColor = computedStyle.backgroundColor;

            squareOne.hidden = true;
        }
    }
    function moveElement(event) {
        let x = event.clientX - 100;
        let y = event.clientY - 100;
        squareOne.style.top = y + "px";
        squareOne.style.left = x + "px";
    }
};



