
$(document).ready(function() {


  $('#container div').on('click', function() {
    // find row and column
    const n = $(this).prevAll().length;
    const row = Math.floor( n / 3 );
    const column = n % 3;
    console.log( n, row, column );

    // play a piece at that position
    const piece = play(row, column); // Either an 'X' or an 'O'
    $(this).addClass( piece );
    // player1( row, column),$(this).html('X');
    // player2( row, column),$(this).html('O');

    // if player1x === true
      // show a "player one" message
    // else
      // show a "player two" message

  });

});
