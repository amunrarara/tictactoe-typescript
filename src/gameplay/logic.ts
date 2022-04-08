const prompt = require('prompt-sync')()
import { GameBoard } from "../../utils/types";
import { updateGameBoard } from "./board";

export function handlePlayerChoice(gameBoard: GameBoard, currentPlayer: string) : void {
    const chosenSquare: number[] = chooseSquare(gameBoard, currentPlayer)
    updateGameBoard(gameBoard, chosenSquare, currentPlayer)
}

function chooseSquare(gameBoard: GameBoard, currentPlayer: string) : number[] {
    let chosenSquare: number[] = []
    while (chosenSquare.length === 0) {
        let input: any
        let rowSelection: number
        let columnSelection: number
        input = parseInt(prompt(`Player ${currentPlayer}: Pick a row, 1 to ${gameBoard.length} >> `))
        if (isNaN(input) || input > gameBoard.length) {
            console.log("You need to enter a valid row number. Please try again.")
            continue
        }
        rowSelection = input
        input = parseInt(prompt(`Next, Pick a column, 1 to ${gameBoard.length}, >> `))
        if (isNaN(input) || input > gameBoard.length) {
            console.log("You need to enter a valid column number. Please try again.")
            continue
        }
        columnSelection = input
        if (gameBoard[rowSelection-1][columnSelection-1] !== "_") {
            console.log("The square you picked is already occupied. Pick again!")
            continue
        }
        chosenSquare.push(rowSelection-1, columnSelection-1)
    }
    return chosenSquare
}