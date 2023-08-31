const container = document.querySelector('#container');

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
            square.classList.add('hover');
        });
    });
};
//generate 16x16 grid by default
generateGrid(16);

//button functionality to generate custom grid
const resetButton = document.querySelector('#resetbutton');
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