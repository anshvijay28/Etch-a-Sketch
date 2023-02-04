let slider = document.querySelector('.slider');
let sliderOutput = document.querySelector('.output');
const container = document.querySelector('.grid-container');

const colorButton = document.querySelector('#color-button');
const resetButton = document.querySelector('#reset-button');
const rainbowButton = document.querySelector('#rainbow-button');
const gridButton = document.querySelector('#grid-button');



container.style.gridTemplateColumns = "repeat(10, 1fr)"
for (let i = 0; i < slider.value ** 2; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}
const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener('mouseleave', (e) => {
        square.style.backgroundColor = "black";
    }));

const clearContainer = () => {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}
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






