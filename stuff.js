const container = document.getElementById('container')
const eraser = document.querySelector('.erase-el')
const newGrid = document.querySelector('.gridcreator')
let board;
let gridNumber;
let boardArray = []
let gridSize;

function getRandomcolor() {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}


function createNewGrid() {
    container.innerHTML = ''

    gridNumber = parseInt(prompt('enter a number for a new grid size(max 100x100): '))

    if (isNaN(gridNumber) || gridNumber > 100) {
        gridNumber = parseInt(prompt('Numebr is either too large or not a number at all enter an number thats 100 or less: '))
    }

    renderGrid(gridNumber)

}



function renderGrid(grid) {

    const squareSize = 600 / grid

    for (let i = 0; i < grid * grid; i++) {
        board = document.createElement('div')
        board.classList.add('square')
        board.style.width = `${squareSize}px`
        board.style.height = `${squareSize}px`
        container.appendChild(board)
        boardArray.push(board)
    }
}

renderGrid(gridNumber = 16)

container.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = getRandomcolor()
    
    container.style.backgroundColor = 'white'
})

eraser.addEventListener('click', () => {
    boardArray.forEach(element => element.style.backgroundColor = 'slategray')
})

newGrid.addEventListener('click', createNewGrid)