const prompt = require('prompt-sync')()
import initializeGame from "./initializeGame"
import { GameBoard } from "../../utils/types"
import { displayGameBoard, updateGameBoard } from "./board"
import { handlePlayerChoice } from "./logic"

export default function runGame(){
    try {
        let gameBoard: GameBoard = initializeGame()
        let victory: boolean = false
        let currentPlayer: string = "x"
        // while (!victory) {
            displayGameBoard(gameBoard)
            handlePlayerChoice(gameBoard, currentPlayer)
            displayGameBoard(gameBoard)
            // victory = checkBoardForVictory(gameBoard)
            // if (!victory) {
                // currentPlayer === "x" ? currentPlayer = "y" : currentPlayer = "x"
            //}
            // console.log("Victory! Congratulations, Player ", currentPlayer)
        // }
    } catch (error) {
        console.error(error)
    }
}

function checkBoardForVictory(gameBoard: GameBoard) : boolean{
    return false
}