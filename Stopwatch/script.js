const minutesBlock = document.querySelector('.js-minutes');
const secondsBlock = document.querySelector('.js-seconds');
const millisecondsBlock = document.querySelector('.js-milliseconds');
const btnStart = document.querySelector('.js-btn_start');
const btnStop = document.querySelector('.js-btn_stop');
const btnReset = document.querySelector('.js-btn_reset');

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

const startTimer = () => {
    milliseconds++;

    if (milliseconds < 9) {
        millisecondsBlock.innerHTML = '0' + milliseconds;
    }

    if ( 99 >= milliseconds && milliseconds > 9) {
        millisecondsBlock.innerHTML = milliseconds;
    }

    if (milliseconds == 100) {
        millisecondsBlock.innerHTML = '00';
    }

    if (milliseconds > 99) {
        seconds++;
        secondsBlock.innerHTML = '0' + seconds;

        milliseconds = 0;
    }

    if (seconds > 9) {
        secondsBlock.innerHTML = seconds;
    }

    if (seconds > 59) {
        minutes++;
        minutesBlock.innerHTML = '0' + minutes;

        seconds = 0;
        secondsBlock.innerHTML = '0' + seconds;
    }

    if (minutes > 9) {
        minutesBlock.innerHTML = minutes;
    }
}

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})

btnStop.addEventListener('click', () => {
    clearInterval(interval);
})

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    millisecondsBlock.innerHTML = '00';
    secondsBlock.innerHTML = '00';
    minutesBlock.innerHTML = '00';
})
