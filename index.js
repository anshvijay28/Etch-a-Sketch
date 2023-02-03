let slider = document.querySelector('.slider');
let sliderOutput = document.querySelector('.output');
const container = document.querySelector('.grid-container');

container.style.gridTemplateColumns = "repeat(10, 1fr)"
for (let i = 0; i < slider.value ** 2; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

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
    let num = 0;
    for (let i = 0; i < slider.value ** 2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
});






