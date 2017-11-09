


const gameBoard = [
  ['_', '_', '_'],
  ['_', '_', '_'],
  ['_', '_', '_']
];

let gameWinX = false;
let gameWinO = false;
let draw = false;
let counter = 0;

const gameWin = function () {

    if (gameBoard[0][0] === 'X' && gameBoard[0][1] === 'X' && gameBoard[0][2] === 'X') {
      gameWinX = true;
      // console.log('Player one is the winner!');
    }

    if (gameBoard[1][0] === 'X' && gameBoard[1][1] === 'X' && gameBoard[1][2] === 'X') {
      gameWinX = true;
      // console.log('Player one is the winner!');
    }

    if (gameBoard[2][0] === 'X' && gameBoard[2][1] === 'X' && gameBoard[2][2] === 'X') {
      gameWinX = true;
      // console.log('Player one is the winner!');
    }

    if (gameBoard[0][0] === 'X' && gameBoard[1][0] === "X" && gameBoard[2][0] === 'X') {
      gameWinX = true;
      // console.log('Player one is the winner!');
    }

    if (gameBoard[0][1] === 'X' && gameBoard[1][1]==='X' && gameBoard[2][1] === 'X') {
      gameWinX = true;
      // console.log('Player one is the winner!');
    }

    if (gameBoard[0][2] === 'X' && gameBoard[1][2] === 'X' && gameBoard[2][2] ==='X') {
      gameWinX = true;
      // console.log('Player one is the winner!');
    }

    if (gameBoard[0][0] === 'X' && gameBoard[1][1] === 'X' && gameBoard[2][2] === 'X') {
      gameWinX = true;
      // console.log('Player one is the winner!');
    }

    if (gameBoard[2][0] === 'X' && gameBoard[1][1] === 'X' && gameBoard[0][2] === 'X') {
      gameWinX = true;
      // console.log('Player one is the winner!');
    }

    if (gameBoard[0][0] === 'O' && gameBoard[0][1] === 'O' && gameBoard[0][2] === 'O') {
      gameWinO = true;
      // console.log('Player two is the winner!');
    }

    if (gameBoard[1][0] === 'O' && gameBoard[1][1] === 'O' && gameBoard[1][2] === 'O') {
      gameWinO = true;
      // console.log('Player two is the winner!');
    }

    if (gameBoard[2][0] === 'O' && gameBoard[2][1] === 'O' && gameBoard[2][2] === 'O') {
      gameWinO = true;
      // console.log('Player two is the winner!');
    }

    if (gameBoard[0][0] === 'O' && gameBoard[1][0] === 'O' && gameBoard[2][0] === 'O') {
      gameWinO = true;
      // console.log('Player two is the winner!');
    }

    if (gameBoard[0][1] === 'O' && gameBoard[1][1]=== 'O' && gameBoard[2][1] === 'O') {
      gameWinO = true;
      // console.log('Player two is the winner!');
    }

    if (gameBoard[0][2] === 'O' && gameBoard[1][2] === 'O' && gameBoard[2][2] ==='O') {
      gameWinO = true;
      // console.log('Player two is the winner!');
    }

    if (gameBoard[0][0] === 'O' && gameBoard[1][1] === 'O' && gameBoard[2][2] === 'O') {
      gameWinO = true;
      // console.log('iPlayer two is the winner!');
    }

    if (gameBoard[2][0] === 'O' && gameBoard[1][1] === 'O' && gameBoard[0][2] === 'O') {
      gameWinO = true;
      // console.log('Player two is the winner!');
    }

    if (counter === 9) {
      console.log(`Count = 9`);
        draw = true;
        gameInPlay();
      //if there is a winner then draw = true
    }
};
gameWin();

let gameInPlay = function () {
  if    (gameWinX === true) {
        player1x = true;
        // alert("The Dog caught the Hound!")
        // console.log("Player 1 is the winner");
  } if  (gameWinO === true) {
        player1x = false;
        // alert("The Hound got away!")
        // console.log("Player 2 is the winner");
  } if (draw === true) {
        // alert("Its a draw")
        // console.log('Its a draw');
  }
};

const play = function (row, column) {
  if (player1x === true) {
    return player1(row, column);
  } else {
    return player2(row, column);
  }
}


let player1x = true;
const player1 = function( row, column ) {
  if  ( player1x === true && gameBoard[row][column] === '_') {
        // console.log(gameBoard[row][column]);
        gameBoard[row][column] = 'X';
        counter ++;
        gameWin();
        // call to function to check if game win or draw is true
        player1x = false;
        gameInPlay();

  } else {
        console.log("pick again");
  }
  console.log("Not your turn");
  return gameBoard[row][column];
};


const player2 = function( row, column ) {
  if (player1x === false && gameBoard[row][column] === '_') {
        // console.log(gameBoard[row][column]);
        gameBoard[row][column] = 'O';
        counter ++;
        gameWin();
        player1x = true;
        // console.log(counter);
        gameInPlay();
  } else {
        console.log("pick again");
  }
  console.log("Not your turn");
  return gameBoard[row][column];
};

//text for player one to win
// player1(0, 0);
// player2(1, 1);
// player1(0, 1);
// player2(1, 2);
// player1(0, 2);
// player2(1, 0);

//text for a draw
//
// player1(0,0);//x
// player2(1,1);//o
// player1(2,2);//x
// player2(1,0);//o
// player1( 1,2 );//x
// player2(0 ,2 );//o
// player1(2, 0);//x
// player2(2,1);//o
// player1(0,1);//x
