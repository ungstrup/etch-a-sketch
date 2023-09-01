const container = document.querySelector('#container');
const resetButton = document.querySelector('#resetbutton');
const randomEnable = document.getElementById('randomradio');
const darkEnable = document.getElementById('darkradio');
let randomColors = [];

function generateGrid (grid){
    if (grid > 100) return;
    for (let i = 1; i <= grid; i++){
        const gridWidth = document.createElement(`div`);
        gridWidth.classList.add('boxwidth');
        container.appendChild(gridWidth);
        for (let j = 1; j <= grid; j++){
            const box = document.createElement('div');
            box.classList.add('square');
            gridWidth.appendChild(box);
        };
    };
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            if (randomEnable.checked){
                randomColor ();
                square.setAttribute('style', `background-color: rgb(${randomColors[0]},${randomColors[1]},${randomColors[2]})`);
            }else if (darkEnable.checked){
                darkening(square);
            }else {
                square.setAttribute('style', `background-color: black`);
            };
        });
    });
};
//generate 16x16 grid by default
generateGrid(16);

//button functionality to generate custom grid
resetButton.addEventListener('click', () => {
    resetGrid();
    generateGrid(+prompt('How many squares per side? (max 100)'));
});

//helper function to clean up grid before making a new one
function resetGrid () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
};
//generate rgb values as a random array
function randomChoice () {
    return Math.floor(Math.random() * 256);
};
function randomColor () {
    randomColors = [randomChoice(),randomChoice(),randomChoice()];
};

//gradually add opacity for a darkening/ burn effect
function darkening (current) {
    if (current.style.opacity == 0){
        current.setAttribute('style', 'background-color: rgb(0,0,0); opacity: 0.1');
    } else if (current.style.opacity < 1){
        current.style.opacity = parseFloat(current.style.opacity) + 0.1;
    }
    return;
};