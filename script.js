/*
to place/spawn a piece using JavaScript:

           // create an empty div
              // assign the div class="piece"
  // add the div to the id="board"
       piece.style.top = '0px';               // assign the top/y position
                        // assign the left/x position
*/

var row1 = 0
var row2 = 0

for  (var i = 0; i <= 11; i ++) {
    var piece = document.createElement('div');
    piece.setAttribute('class', 'piece');
    document.getElementById('board').appendChild(piece);
    piece.style.left = ( i*100 + "px");

    
    if (i >= 6) {
        piece.style.top = ("100px");
        piece.style.left = ( 100*row1+ "px");
        row1 ++;

    }
    
    else {
        piece.style.top = ("0px");
        piece.style.left = (100*row2+"px")
        row2 ++;
    }
}