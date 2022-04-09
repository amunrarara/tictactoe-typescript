"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
var initialize_1 = require("./initialize");
var board_1 = require("./board");
var logic_1 = require("./logic");
function runGame() {
    try {
        var gameBoard = (0, initialize_1.default)();
        var currentPlayer = "X";
        var round = 1;
        var finalRound = gameBoard.length * gameBoard.length;
        while (round <= finalRound) {
            (0, board_1.displayGameBoard)(gameBoard);
            (0, logic_1.handlePlayerChoice)(gameBoard, currentPlayer);
            if ((0, logic_1.checkBoardForVictory)(gameBoard, currentPlayer))
                declareVictory(gameBoard, currentPlayer);
            currentPlayer === "X" ? currentPlayer = "O" : currentPlayer = "X";
            round++;
        }
        declareStalemate();
    }
    catch (error) {
        console.error(error);
    }
}
exports.default = runGame;
function declareVictory(gameBoard, currentPlayer) {
    (0, board_1.displayGameBoard)(gameBoard);
    console.log("\n    ********************\n\n    Congratulations, Player ".concat(currentPlayer, ", you win!\n    \n    ********************\n    "));
    process.exit();
}
function declareStalemate() {
    console.log("\n    ********************\n    \n    It's a stalemate! \n\n    Either everyone gets a trophy, or nobody gets a trophy, it's up to you. \n    \n    Thanks for playing!\n\n    ********************\n    ");
    process.exit();
}
