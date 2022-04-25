"use strict";
// Gameplay logic
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkBoardForVictory = exports.handlePlayerChoice = void 0;
var prompt = require('prompt-sync')();
var board_1 = require("./board");
function handlePlayerChoice(gameBoard, currentPlayer) {
    var chosenSquare = chooseSquare(gameBoard, currentPlayer);
    (0, board_1.updateGameBoard)(gameBoard, chosenSquare, currentPlayer);
    return chosenSquare;
}
exports.handlePlayerChoice = handlePlayerChoice;
function chooseSquare(gameBoard, currentPlayer) {
    var chosenSquare = [];
    while (chosenSquare.length === 0) {
        var input = void 0;
        var rowSelection = void 0;
        var columnSelection = void 0;
        input = parseInt(prompt("Player ".concat(currentPlayer, ": Pick a row, 1 to ").concat(gameBoard.length, " >> ")));
        if (isNaN(input) || input > gameBoard.length) {
            console.log("You need to enter a valid row number. Please try again.");
            continue;
        }
        rowSelection = input;
        input = parseInt(prompt("Next, Pick a column, 1 to ".concat(gameBoard.length, ", >> ")));
        if (isNaN(input) || input > gameBoard.length) {
            console.log("You need to enter a valid column number. Please try again.");
            continue;
        }
        columnSelection = input;
        if (gameBoard[rowSelection - 1][columnSelection - 1] !== "_") {
            console.log("The square you picked is already occupied. Pick again!");
            continue;
        }
        chosenSquare.push(rowSelection - 1, columnSelection - 1);
    }
    return chosenSquare;
}
function checkBoardForVictory(gameBoard, chosenSquare, currentPlayer) {
    // Check horizontal
    if (isLineVictory(gameBoard[chosenSquare[0]], currentPlayer))
        return true;
    var line = [];
    // Check vertical
    for (var i = 0; i < gameBoard.length; i++) {
        if (!isPlayerToken((gameBoard[i][chosenSquare[1]]), currentPlayer))
            break;
        if (i === gameBoard.length - 1)
            return true;
    }
    if (chosenSquare[0] === chosenSquare[1]) {
        // Check diagonal-left
        for (var i = 0; i < gameBoard.length; i++) {
            if (!isPlayerToken(gameBoard[i][i], currentPlayer))
                break;
            if (i === gameBoard.length - 1)
                return true;
        }
    }
    if ((chosenSquare[0] + chosenSquare[1]) === (gameBoard.length - 1)) {
        // Check reverse-diagonal
        var offset = void 0;
        for (var i = 0; i < gameBoard.length; i++) {
            offset = (gameBoard.length - 1) - i;
            if (!isPlayerToken(gameBoard[i][offset], currentPlayer))
                break;
            if (i === gameBoard.length - 1)
                return true;
        }
    }
}
exports.checkBoardForVictory = checkBoardForVictory;
function isLineVictory(line, currentPlayer) {
    if (line.includes("_"))
        return false;
    return line.every(function (value) { return value === currentPlayer; });
}
function isPlayerToken(token, currentPlayer) {
    return token === currentPlayer;
}
