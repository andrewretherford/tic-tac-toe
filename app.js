// constants


// state variables and objects
let player, currentTurn, boardState, winCondition, currentPlayer, infoMessage

class Player {
    constructor(mark, name) {
        this.mark = mark
        this.wins = 0
        this.name = name
    }
}

// DOM elements
const message = document.querySelector('.message')
const currentPlayerLabel = document.querySelector('.current-player-label')
const gameBoardContainer = document.querySelector('.game-board-container')
const square = document.querySelectorAll('.square')
const resetButton = document.querySelector('.reset-button')

// event handlers
function playerChoiceHandler(e) {
    if(!e.target.classList.contains('square')) return; // return if a square wasn't clicked

    if(e.target.classList.contains('clicked')) { // check to see if the square was already clicked
        infoMessage = 'That square has already been played, choose another!'
    } else {
        for(let i = 0; i < boardState.length; i++) { // update boardState with the current player mark
            if(e.target.classList.contains((i + 1).toString())) {
                boardState[i] = player[currentTurn].mark
                infoMessage = ''   
                break
            }
        }
        clicked(e.target)
        newTurn(currentTurn)
    }
    render()
}

function resetButtonHandler() {
    init()
    render()
}

// event listeners
gameBoardContainer.addEventListener('click', playerChoiceHandler)
resetButton.addEventListener('click', resetButtonHandler)

// game functions
function clicked(element) {
    if(!element.classList.contains('clicked')) element.classList.add('clicked');
}

function newTurn() {
    if(currentTurn == 1) {
        currentTurn = 0
    } else {
        currentTurn = 1
    }
}

function showHide(element) {
    element.classList.toggle('hide')
}

// init function
function init() {
    // initialize player objects
    const playerOne = new Player('X', 'Player One')
    const playerTwo = new Player('O', 'Player Two')

    // initialize state variables
    player = [playerOne, playerTwo]
    currentTurn = 0
    boardState = ['', '', '', '', '', '', '', '', '']
    winCondition = ["1 2 3", "4 5 6", "7 8 9", "1 4 7", "2 5 8", "3 6 9", "1 5 9", "3 5 7"]
    currentPlayer = player[currentTurn]
    infoMessage = ''

    // clear clicked class
    for(let i = 0; i < square.length; i++) {
        if(square[i].classList.contains('clicked')) {
            square[i].classList.remove('clicked')
        }
    }
}

// render function

function render() {
    currentPlayerLabel.innerText = `${player[currentTurn].name}'s turn`
    message.innerText = infoMessage
    for(let i=0; i < boardState.length; i++) {
        square[i].innerText = boardState[i]
    }
}

// initiate and render the board on load
init()
render()