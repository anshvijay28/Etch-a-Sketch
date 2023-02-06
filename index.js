let slider = document.querySelector('.slider');
let sliderOutput = document.querySelector('.output');
const container = document.querySelector('.grid-container');
const colorList = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee'];
let color = "#000000";
let passThrough = 0;
let rainbow = false;
let shades = false;
let shadeVal = 0;

const colorButton = document.querySelector('#color-button');
const shadesButton = document.querySelector('#shades-button');
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
    squares.forEach(square => square.addEventListener('mouseenter', e => {
        if (rainbow) {
            square.style.backgroundColor = colorList[passThrough];
        } else if (shades) {
            if (shadeVal == 999999) {
                shadeVal = 0;
            }
            square.style.backgroundColor = "#" + shadeVal.toString();
            shadeVal = shadeVal + 111111;
        } else {
            square.style.backgroundColor = color;
        }
        passThrough++;
        if (passThrough >= 7) {
            passThrough = passThrough % 7;
        }
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
    rainbow = false;
    shades = false;
    color = "#000000";
});
shadesButton.addEventListener('click', e => {
    shades = true;
    rainbow = false;
});

gridButton.addEventListener("click", e => {
    container.classList.toggle("grid-borders");
});

colorButton.addEventListener("click", e => {
    color = prompt("Enter color code: ");
    rainbow = false;
    shades = false;
});

rainbowButton.addEventListener("click", e => {
    rainbow = true;
    shades = false;
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
    squares.forEach(square => square.addEventListener('mouseenter', (e) => {
        if (rainbow) {
            square.style.backgroundColor = colorList[passThrough];
        } else if (shades) {
            if (shadeVal == 999999) {
                shadeVal = 0;
            }
            square.style.backgroundColor = "#" + shadeVal.toString();
            shadeVal = shadeVal + 111111;
        } else {
            square.style.backgroundColor = color;
        }
        passThrough++;
        if (passThrough >= 7) {
            passThrough = passThrough % 7;
        }
    }));
});






