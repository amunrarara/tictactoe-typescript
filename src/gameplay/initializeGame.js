"use strict";
exports.__esModule = true;
var board_1 = require("./board");
function initializeGame() {
    try {
        displayWelcomeMessage();
        var gameBoardSize = (0, board_1.inputGameBoardSize)();
        return (0, board_1.generateGameBoard)(gameBoardSize);
    }
    catch (error) {
        console.error('There was a problem initializing the game: ', error);
    }
}
exports["default"] = initializeGame;
function displayWelcomeMessage() {
    console.log("\n        Welcome to TicTacToe!\n\n        If you've never played TicTacToe before, visit https://www.wikihow.com/Play-Tic-Tac-Toe for instructions.\n\n        This version is unique, however: we can play with a board of any size (3x3, 4x4, 5x5, etc). \n\n        Note, extremely large boards (greater than 10x10) might not display properly, due to terminal space.\n\n        -- Instructions --\n\n        1. Declare a board size. You'll be prompted for a number (n). We'll build a square board that's n-by-n.\n\n        2. First player, x, will pick a square to place their token. You'll pick a row (1 to n), then a column (1 to n).\n\n        3. If you made a perfect line, you win! \n    ");
}
