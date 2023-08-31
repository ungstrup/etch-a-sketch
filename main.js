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
};

generateGrid(10);
const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.classList.add('hover');
    });
});
