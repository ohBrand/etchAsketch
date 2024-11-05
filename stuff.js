const container = document.getElementById('container')
const squares = document.querySelectorAll('.squares')
const eraser = document.querySelector('button')
let board;
let boardArray = []

function renderGrid() {

    for (let i = 1; i <= 256; i++) {
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