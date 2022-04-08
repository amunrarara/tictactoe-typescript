"use strict";
exports.__esModule = true;
var initializeGame_1 = require("./initializeGame");
function main() {
    try {
        (0, initializeGame_1["default"])();
        // let victory = false
        // while (!victory) {
        //     displayBoard()
        //     receiveInput()
        //     updateBoard()
        //     checkBoardForVictory()
        // }
    }
    catch (error) {
        console.error(error);
    }
}
exports["default"] = main;
function displayBoard() {
}
function receiveInput() {
}
function updateBoard() {
}
function checkBoardForVictory() {
}
