- TicTacToe - Variable Board Size
-- Created by Acea Spades Black, April 2022
--- Contact: aceaspades@protonmail.com 

### Required dependencies:
- Node (18 or latest)
- npm (included with Node)

### How to run the application:

1. From the 'TicTacToe' directory, run 'npm install'
2. From the same directory, run 'npm start'


### Observable / Potential Improvements:
1. Exit input | Currently, the only way to exit the game is to close the terminal, or achieve a victory condition.


### Version History

#### 1.0.1 | 4/25/2022
- Refactored ```checkBoardForVictory()``` to specifically check for the row/column/diagonal in which a new token is placed
- Removed the now-irrelevant array, line[], which was being instantiated/populated/overwritten during every round and checked in a secondary function to verify that it was filled with exclusively the player’s tokens
- Removed loops which checked over the entire board, instead of specifically relevant lines

#### 1.0.0
- Initial release
