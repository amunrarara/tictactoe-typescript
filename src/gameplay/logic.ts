// Gameplay logic

const prompt = require('prompt-sync')()
import { GameBoard } from "../../utils/types";
import { updateGameBoard } from "./board";

export function handlePlayerChoice(gameBoard: GameBoard, currentPlayer: string) : number[] {
    const chosenSquare: number[] = chooseSquare(gameBoard, currentPlayer)
    updateGameBoard(gameBoard, chosenSquare, currentPlayer)
    return chosenSquare
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

export function checkBoardForVictory(gameBoard: GameBoard, chosenSquare: number[], currentPlayer: string) : boolean{
    
    // Check horizontal
    if (isLineVictory(gameBoard[chosenSquare[0]], currentPlayer)) return true
    
    // Check vertical
    for (let i = 0; i < gameBoard.length; i++) {
        if (!isPlayerToken((gameBoard[i][chosenSquare[1]]), currentPlayer)) break
        if (i === gameBoard.length - 1) return true
    }
    
    if (chosenSquare[0] === chosenSquare[1]) {
        // Check diagonal-left
        for (let i = 0; i < gameBoard.length; i++) {
            if (!isPlayerToken(gameBoard[i][i], currentPlayer)) break
            if (i === gameBoard.length - 1) return true
        }
    }

    if ((chosenSquare[0] + chosenSquare[1]) === (gameBoard.length - 1)) {
        // Check reverse-diagonal
        let offset: number
        for (let i = 0; i < gameBoard.length; i++) {
            offset = (gameBoard.length - 1) - i
            if (!isPlayerToken(gameBoard[i][offset], currentPlayer)) break
            if (i === gameBoard.length - 1) return true
        }
    }
}

function isLineVictory(line: string[], currentPlayer: string): boolean {
    if (line.includes("_")) return false
    return line.every(value => value === currentPlayer)
}

function isPlayerToken(token: string, currentPlayer: string): boolean {
    return token === currentPlayer
}