"use strict";
exports.__esModule = true;
var initializeGame_1 = require("./initializeGame");
function runGame() {
    try {
        var gameBoard = (0, initializeGame_1["default"])();
        var victory = false;
        // while (!victory) {
        displayBoard(gameBoard);
        // receiveInput()
        // updateBoard()
        // checkBoardForVictory()
        // }
    }
    catch (error) {
        console.error(error);
    }
}
exports["default"] = runGame;
function displayBoard(gameBoard) {
    console.log("===================");
    gameBoard.forEach(function (row) {
        console.log.apply(console, row);
    });
    console.log("");
    console.log("===================");
}
function receiveInput() {
}
function updateBoard() {
}
function checkBoardForVictory() {
}
