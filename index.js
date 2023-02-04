let slider = document.querySelector('.slider');
let sliderOutput = document.querySelector('.output');
const container = document.querySelector('.grid-container');

const colorButton = document.querySelector('#color-button');
const resetButton = document.querySelector('#reset-button');
const rainbowButton = document.querySelector('#rainbow-button');
const gridButton = document.querySelector('#grid-button');

function reset() {
    clearContainer();
    container.style.gridTemplateColumns = "repeat(10, 1fr)"
    for (let i = 0; i < 100; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
    resetSlider();
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener('mouseleave', e => {
        square.style.backgroundColor = "black";
    }));
}

function clearContainer() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}
function resetSlider() {
    sliderOutput.textContent = 10;
    while (slider.value != 10) {
        if (slider.value > 10) {
            slider.stepDown();
        } else {
            slider.stepUp();
        }
    }
}

reset();

resetButton.addEventListener("click", e => {
    reset();
});

slider.addEventListener('input', function() {
    clearContainer();
    sliderOutput.textContent = slider.value;
    let dimensionStyle = "repeat(" + slider.value + ", 1fr)";
    container.style.gridTemplateColumns = dimensionStyle;
    for (let i = 0; i < slider.value ** 2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener('mouseleave', (e) => {
        square.style.backgroundColor = "black";
    }));
});






