const prompt = require('prompt-sync')()
import { GameBoard, GameBoardRow } from '../utils/types'

export default function initializeGame() : GameBoard {
    try {
        displayWelcomeMessage()
        return generateGameBoard(setBoardSize())
    } catch (error) {
        console.error('There was a problem initializing the game: ', error)
    }
}

function displayWelcomeMessage() : void {
    console.log(`
        Welcome to TicTacToe!

        If you've never played TicTacToe before, visit https://www.wikihow.com/Play-Tic-Tac-Toe for instructions.

        This version is unique, however: we can play with a board of any size (3x3, 4x4, 5x5, etc). 

        Note, extremely large boards (greater than 10x10) might not display properly, due to terminal space.
    `)
}

function setBoardSize() : number {
        let input: any
        let validInput: boolean = false
        while (!validInput) {
            input = parseInt(prompt('How big do you want the board to be? Enter a number >> '))
            if (isNaN(input)) console.log("You need to enter a number. Please try again.")
            else validInput = true
        }
        return input
}

function generateGameBoard(boardSize: number) : GameBoard {
    let gameBoard : GameBoard = []
    let rowArray : GameBoardRow  = []
    for (let i = 0; i < boardSize; i++) {
        rowArray.push("_")
    }
    for (let i = 0; i < boardSize; i++) {
        gameBoard.push(rowArray)
    }
    return gameBoard
}