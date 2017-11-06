

const gameBoard = [
  ['_', '_', '_'],
  ['_', '_', '_'],
  ['_', '_', '_']
]

gameBoard[0][0];

let player1x = true;

const player1 = function( row, index ) {
  if  ( player1x === true && gameBoard[row][index] === '_') {
        console.log(gameBoard[row][index]);
        player1x = false;
        gameBoard[row][index] = 'X';
  } else {
        console.log("pick again");
  }
  console.log("Not your turn");
};
player1(0, 1);


const player2 = function( row, index ) {
  if (player1x === false && gameBoard[row][index] === '_') {
        console.log(gameBoard[row][index]);
        gameBoard[row][index] = 'O';
        player1x = true;
  } else {
        console.log("pick again");
  }
  console.log("Not your turn");
};
player2(0, 2);
