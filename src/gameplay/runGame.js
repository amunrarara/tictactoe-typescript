"use strict";
exports.__esModule = true;
var prompt = require('prompt-sync')();
var initializeGame_1 = require("./initializeGame");
var board_1 = require("./board");
var logic_1 = require("./logic");
function runGame() {
    try {
        var gameBoard = (0, initializeGame_1["default"])();
        var victory = false;
        var currentPlayer = "x";
        // while (!victory) {
        (0, board_1.displayGameBoard)(gameBoard);
        (0, logic_1.handlePlayerChoice)(gameBoard, currentPlayer);
        (0, board_1.displayGameBoard)(gameBoard);
        // victory = checkBoardForVictory(gameBoard)
        // if (!victory) {
        // currentPlayer === "x" ? currentPlayer = "y" : currentPlayer = "x"
        //}
        // console.log("Victory! Congratulations, Player ", currentPlayer)
        // }
    }
    catch (error) {
        console.error(error);
    }
}
exports["default"] = runGame;
function checkBoardForVictory(gameBoard) {
    return false;
}
