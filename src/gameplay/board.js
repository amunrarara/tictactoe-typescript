"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.updateGameBoard = exports.displayGameBoard = exports.generateGameBoard = exports.inputGameBoardSize = void 0;
var prompt = require('prompt-sync')();
function inputGameBoardSize() {
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
exports.inputGameBoardSize = inputGameBoardSize;
function generateGameBoard(boardSize) {
    var gameBoard = [];
    for (var i = 0; i < boardSize; i++) {
        gameBoard.push(new Array(0));
        for (var j = 0; j < boardSize; j++) {
            gameBoard[i][j] = "_";
        }
    }
    return gameBoard;
}
exports.generateGameBoard = generateGameBoard;
function displayGameBoard(gameBoard) {
    console.log("===================");
    gameBoard.forEach(function (row, index) {
        console.log.apply(console, __spreadArray([index + 1, ": "], row, false));
    });
    console.log("");
    console.log("===================");
}
exports.displayGameBoard = displayGameBoard;
function updateGameBoard(gameBoard, rowColumn, token) {
    gameBoard[rowColumn[0]][rowColumn[1]] = token;
}
exports.updateGameBoard = updateGameBoard;
