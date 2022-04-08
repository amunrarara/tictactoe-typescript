import { GameBoard } from '../../utils/types'
import { inputGameBoardSize, generateGameBoard } from './board'

export default function initializeGame() : GameBoard {
    try {
        displayWelcomeMessage()
        const gameBoardSize = inputGameBoardSize()
        return generateGameBoard(gameBoardSize)
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

        -- Instructions --

        1. Declare a board size. You'll be prompted for a number (n). We'll build a square board that's n-by-n.

        2. First player, x, will pick a square to place their token. You'll pick a row (1 to n), then a column (1 to n).

        3. If you made a perfect line, you win! 
    `)
}

