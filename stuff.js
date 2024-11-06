const container = document.getElementById('container')
const eraser = document.querySelector('.erase-el')
const newGrid = document.querySelector('.gridcreator')
let board;
let boardArray = []
let gridSize;

function createNewGrid() {
    container.innerHTML = ''

    gridSize = parseInt(prompt('enter a number for a new grid size(max 100x100): '))

    gridSize = gridSize * gridSize
}




function renderGrid(grid = 256) {

    for (let i = 0; i < grid; i++) {
        board = document.createElement('div')
        board.classList.add('square')
        container.appendChild(board)
        boardArray.push(board)
    }
}

renderGrid()

container.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = '#FAB30C'

    // setTimeout(() => {
    //     event.target.style.backgroundColor = 'slategray'
    // }, 1500)
    
    container.style.backgroundColor = 'white'
})

eraser.addEventListener('click', () => {
    boardArray.forEach(element => element.style.backgroundColor = 'slategray')
})

newGrid.addEventListener('click', createNewGrid)