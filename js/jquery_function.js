
$(document).ready(function() {


  $('#container div').on('click', function() {
    // find row and column
    const n = $(this).prevAll().length;
    const row = Math.floor( n / 3 );
    const column = n % 3;
    console.log( n, row, column );
    $("h2").hide();
    // play a piece at that position
    const piece = play(row, column); // Either an 'X' or an 'O'
    $(this).addClass( piece );

    if  (gameWinX === true) {
        player1x = true;
        // alert("The Dog caught the Hound!")
        $(".O").fadeTo("slow", 0.2);
        $(".image2").fadeTo("slow", 0.2);
        $("#dogwinner").html("<p>The Dog caught the Hound!</p>");
        window.location.reload(true);


  } if  (gameWinO === true) {
        player1x = false;
        // alert("The Fox got away!")
        $(".X").fadeTo("slow", 0.2);
        $(".image1").fadeTo("slow", 0.2);
        $("#foxwinner").html("<p>The Fox got away!!</p>");

  } if (draw === true) {
        // alert("Its a draw")
        $("#container").hide();
        $(".image1").hide();
        $(".image2").hide();
        $(".image3").fadeTo("slow", 1);
        $("#draw").html("<p>Its a draw lets go to the pub!</p>");
        // console.log('Its a draw');
  }

    // player1( row, column),$(this).html('X');
    // player2( row, column),$(this).html('O');



  });











});
