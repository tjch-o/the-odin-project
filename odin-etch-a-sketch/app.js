let gridSize = 16;
let currentColour = "black";

const grid = document.querySelector(".grid-container");
let allGridSquares = document.querySelectorAll(".grid-square");

function makeGrid(rows, cols) {
    grid.style.setProperty("--grid-rows", rows);
    grid.style.setProperty("--grid-cols", cols);

    for (let i = 0; i < rows; i += 1) {
        for (let j = 0; j < rows; j += 1) {
            let gridSquare = document.createElement("div");
            gridSquare.addEventListener("mouseenter", () => {
                gridSquare.style.backgroundColor = currentColour;
            })
            grid.appendChild(gridSquare).className = "grid-square";
        }
    }
    // we select everything again after we create a new grid so that the buttons can work on the new grid
    allGridSquares = document.querySelectorAll(".grid-square");
}
makeGrid(gridSize, gridSize);

function clearAll() {
    allGridSquares.forEach(element => {
        element.style.backgroundColor = "white";
    })
}

const eraseEverythingButton = document.querySelector(".reset-button");
eraseEverythingButton.textContent = "Reset";
eraseEverythingButton.addEventListener("click", () => {
    clearAll();
});

const switchGridButton = document.querySelector(".switch-on-off-grid");
switchGridButton.textContent = "Turn on grid lines";
let isGridLinesOn = true;

function turnSwitchOn() {
    isGridLinesOn = true;
    switchGridButton.textContent = "Turn off grid lines";
    allGridSquares.forEach(element => {
        element.style.borderStyle = "solid";
    });
}

function turnSwitchOff() {
    isGridLinesOn = false;
    switchGridButton.textContent = "Turn on grid lines";
    allGridSquares.forEach(element => {
        element.style.borderStyle = "none";
    });
}

// we do the opposite for the next time the user clicks the button
switchGridButton.addEventListener("click", () => {
    if (isGridLinesOn == true) {
        turnSwitchOff();
    } else {
        turnSwitchOn();
    }
})

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let colour = "#"
    let randomNumber = 0;
    for (let i = 0; i < 6; i += 1) {
        randomNumber = Math.floor(Math.random() * 16);
        colour += letters[randomNumber];
    }
    return colour;
}

const eraseSquareButton = document.querySelector(".erase-button");
eraseSquareButton.textContent = "Erase";
eraseSquareButton.addEventListener("click", () => {
    allGridSquares.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.style.backgroundColor = "white";
        })     
    })
});

const randomColourButton = document.querySelector(".rainbow-button");
randomColourButton.textContent = "Rainbow";
randomColourButton.addEventListener("click", () => {
    allGridSquares.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.style.backgroundColor = getRandomColor();
        })     
    })
});

const customiseColourButton = document.getElementById("user-input-colour");
function changeToSelectedColour() {
    customiseColourButton.addEventListener("change", (e) => {
        currentColour = e.target.value;
        allGridSquares.forEach(element => 
            element.addEventListener("mouseenter", () => {
                element.style.backgroundColor = currentColour;
        }))
    })
}
changeToSelectedColour();

const changeGridSize = document.querySelector(".change-grid-size");
const gridSizeText = document.querySelector(".grid-size-text");
gridSizeText.textContent= `Grid size: ${gridSize} x ${gridSize}`;

// create a user input for gridSize then delete all the elements in grid content then add in gridSize
const gridSlider = document.getElementById("gridsize-slider");
gridSlider.addEventListener("input", () => {
    gridSize = gridSlider.value;
    gridSizeText.textContent= `Grid size: ${gridSize} x ${gridSize}`;
});

// this is to reduce lag rather than we combine with the above event
gridSlider.addEventListener("change", () => {
    grid.innerHTML = "";
    makeGrid(gridSize, gridSize);
} )