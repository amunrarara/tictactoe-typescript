const prompt = require('prompt-sync')()
import initialize from "./initialize"
import { GameBoard } from "../../utils/types"
import { displayGameBoard } from "./board"
import { handlePlayerChoice, checkBoardForVictory } from "./logic"

export default function runGame(){
    try {
        let gameBoard: GameBoard = initialize()
        let currentPlayer: string = "X"
        let round: number = 1
        let finalRound: number = gameBoard.length * gameBoard.length
        while (round <= finalRound) {
            displayGameBoard(gameBoard)
            handlePlayerChoice(gameBoard, currentPlayer)
            if (checkBoardForVictory(gameBoard, currentPlayer)) declareVictory(gameBoard, currentPlayer)
            currentPlayer === "X" ? currentPlayer = "O" : currentPlayer = "X"
            round++
        }
        declareStalemate()
    } catch (error) {
        console.error(error)
    }
}

function declareVictory(gameBoard: GameBoard, currentPlayer: string){
    displayGameBoard(gameBoard)
    console.log(`
    ********************

    Congratulations, Player ${currentPlayer}, you win!
    
    ********************
    `)
    process.exit()
}

function declareStalemate(){
    console.log(`
    ********************
    
    It's a stalemate! 

    Either everyone gets a trophy, or nobody gets a trophy, it's up to you. 
    
    Thanks for playing!

    ********************
    `)
    process.exit()
}