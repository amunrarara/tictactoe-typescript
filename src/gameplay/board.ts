const prompt = require('prompt-sync')()
import { GameBoard, GameBoardRow } from "../../utils/types"

export function inputGameBoardSize() : number {
    let input: any
    let validInput: boolean = false
    while (!validInput) {
        input = parseInt(prompt('How big do you want the board to be? Enter a number >> '))
        if (isNaN(input)) console.log("You need to enter a number. Please try again.")
        else validInput = true
    }
    return input
}

export function generateGameBoard(boardSize: number) : GameBoard {
let gameBoard : GameBoard = []
for (let i = 0; i < boardSize; i++) {
    gameBoard.push(new Array(0))
    for (let j = 0; j < boardSize; j++) {
        gameBoard[i][j] = "_"
    }
}
return gameBoard
}

export function displayGameBoard(gameBoard: GameBoard): void {
    console.log("===================")
    gameBoard.forEach((row, index) => {
        console.log(index + 1, ": ", ...row)
    })
    console.log("")
    console.log("===================")
}

export function updateGameBoard(gameBoard: GameBoard, rowColumn: number[], token: string): void{
    gameBoard[rowColumn[0]][rowColumn[1]] = token
}