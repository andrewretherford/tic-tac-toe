// constants


// state variables and objects
let player, currentTurn, boardState, infoMessage, winMessage, winState

class Player {
    constructor(mark, name) {
        this.mark = mark
        this.wins = 0
        this.name = name
    }
}

// DOM elements
const message = document.querySelector('.message')
const victoryMessageContainer = document.querySelector('.victory-message-container')
const victoryMessage = document.querySelector('.victory-message')
const currentPlayerLabel = document.querySelector('.current-player-label')
const gameBoardContainer = document.querySelector('.game-board-container')
const square = document.querySelectorAll('.square')
const resetButtonContainer = document.querySelector('.reset-button-container')
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
                console.log(boardState)
                infoMessage = ''   
                break
            }
        }
        clicked(e.target)
        winState = checkWin()
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

function checkWin() {
    for(let i=0; i < boardState.length -2; i++) {
        if(boardState[i] != '') {
            switch(i + 1) {
                case 1: // check for diagonal from first square
                    if(boardState[i] == boardState[i + 4] && boardState[i] == boardState[i + 8]) {
                        win()
                        console.log(i+1)
                        console.log('1')
                        return true
                    }
                    break
                case 3: // check for diagonal from third square
                    if(boardState[i] == boardState[i + 2] && boardState[i] == boardState[i + 4]) {
                        win()
                        console.log(i+1)
                        console.log('3')
                        return true
                    }
                    break    
                case 1: // check for row across
                case 4:
                case 7:
                    if(boardState[i] == boardState[i + 1] && boardState[i] == boardState[i + 2]) {
                        win()
                        console.log(i+1)
                        console.log('1, 4, 7')
                        return true
                    }
                    break
                case 1: // check for row down
                case 2:
                case 3:
                    if(boardState[i] == boardState[i + 3] && boardState[i] == boardState[i + 6]) {
                        win()
                        console.log(i+1)
                        console.log('1, 2, 3')
                        return true
                    }
                    break
                default:
                    break
            }
        }
    }

    // handle a tie game
    console.log(!boardState.includes(''))
    if(!boardState.includes('')) {
        tie()
    }
    return false
}

function win() {
        winMessage = `${player[currentTurn].name} Wins!!`
        showHide(victoryMessageContainer)
        showHide(gameBoardContainer)
        showHide(resetButtonContainer)
}

function tie() {
    winMessage = `Cat's Game`
    showHide(victoryMessageContainer)
    showHide(gameBoardContainer)
    showHide(resetButtonContainer)
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
    infoMessage = ''
    winMessage = ''
    winState = false
    
    // clear clicked class
    for(let i = 0; i < square.length; i++) {
        if(square[i].classList.contains('clicked')) {
            square[i].classList.remove('clicked')
        }
    }
    
    // hide and show correct elements for game start
    if(gameBoardContainer.classList.contains('hide')) {
        showHide(gameBoardContainer)
    }

    if(!resetButtonContainer.classList.contains('hide')) {
        showHide(resetButtonContainer)
    }

    if(!victoryMessageContainer.classList.contains('hide')) {
        showHide(victoryMessageContainer)
    }
}

// render function

function render() {
    currentPlayerLabel.innerText = `${player[currentTurn].name}'s turn`
    message.innerText = infoMessage
    victoryMessage.innerText = winMessage
    for(let i=0; i < boardState.length; i++) {
        square[i].innerText = boardState[i]
    }
}

// initiate and render the board on load
init()
render()