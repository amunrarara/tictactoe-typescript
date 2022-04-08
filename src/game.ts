import initializeGame from "./initializeGame"
import { GameBoard } from "../utils/types"

export default function runGame(){
    try {
        let gameBoard: GameBoard = initializeGame()
        let victory: boolean = false
        // while (!victory) {
            displayBoard(gameBoard)
            // receiveInput()
            // updateBoard()
            // checkBoardForVictory()
        // }
    } catch (error) {
        console.error(error)
    }
}

function displayBoard(gameBoard: GameBoard): void {
    console.log("===================")
    gameBoard.forEach(row => {
        console.log(...row)
    })
    console.log("")
    console.log("===================")
}

function receiveInput(){

}

function updateBoard(){
    
}

function checkBoardForVictory(){

}