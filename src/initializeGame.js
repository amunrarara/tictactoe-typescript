"use strict";
exports.__esModule = true;
var prompt = require('prompt-sync')();
function initializeGame() {
    try {
        displayWelcomeMessage();
        return generateGameBoard(setBoardSize());
    }
    catch (error) {
        console.error('There was a problem initializing the game: ', error);
    }
}
exports["default"] = initializeGame;
function displayWelcomeMessage() {
    console.log("\n        Welcome to TicTacToe!\n\n        If you've never played TicTacToe before, visit https://www.wikihow.com/Play-Tic-Tac-Toe for instructions.\n\n        This version is unique, however: we can play with a board of any size (3x3, 4x4, 5x5, etc). \n\n        Note, extremely large boards (greater than 10x10) might not display properly, due to terminal space.\n    ");
}
function setBoardSize() {
    var input;
    var validInput = false;
    while (!validInput) {
        input = parseInt(prompt('How big do you want the board to be? Enter a number >> '));
        if (isNaN(input))
            console.log("You need to enter a number. Please try again.");
        else
            validInput = true;
    }
    return input;
}
function generateGameBoard(boardSize) {
    var gameBoard = [];
    var rowArray = [];
    for (var i = 0; i < boardSize; i++) {
        rowArray.push(" ");
    }
    for (var i = 0; i < boardSize; i++) {
        gameBoard.push(rowArray);
    }
    console.log(gameBoard);
    return gameBoard;
}
