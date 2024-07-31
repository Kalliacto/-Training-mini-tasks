const inputs = document.querySelectorAll('input[type="radio"]');
const img = document.querySelector('.img__pic');

for (let input of inputs) {
    input.addEventListener('click', (e) => {
        console.log(e.target.value);
        img.style.aspectRatio = e.target.value;
    });
}
