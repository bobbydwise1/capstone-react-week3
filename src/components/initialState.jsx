import * as math from 'mathjs';

//put initialstate here later
//define piece classes here


//callbacks that determine if a gameBoard square is a legal square for your piece to lond on based on the chess move rules for that piece
//Experimental
//Note, additional funcctions are needed for obstructing pieces, and king check, and possibly king checkmate.
const queen = {function(YPos,XPos,pieceYPos,pieceXPos) {
  if ((YPos === pieceYPos) || (XPos === pieceXPos) || (Math.abs(YPos+pieceYPos) === Math.abs(XPos+pieceXPos))) {
    console.log("Return this square as legal to land on");
  } else {
    console.log("Return this square as not legal to land on");
  };
};

const rook = {function(YPos,XPos,pieceYPos,pieceXPos) {
  if ((XPos === pieceYPos) || (XPos === pieceXPos)) {
    console.log("Return this square as legal to land on");
  } else {
    console.log("Return this square as not legal to land on");
  };
}

const bishop = {function(YPos,XPos,pieceYPos,pieceXPos) {
  if (Math.abs(YPos+pieceYPos) === Math.abs(XPos+pieceXPos)) {
    console.log("Return this square as legal to land on");
  } else {
    console.log("Return this square as not legal to land on");
  };
}

const knight = {function(YPos,XPos,pieceYPos,pieceXPos) {
  if (((YPos === Math.abs(2+pieceYPos)) && (XPos === Math.abs(1+pieceXPos))) || ((YPos === Math.abs(1+pieceYPos)) && (XPos === Math.abs(2+pieceXPos)))) {
    console.log("Return this square as legal to land on");
  } else {
    console.log("Return this square as not legal to land on");
  };
}

//king is actually complicated.  There is also the status of check, prevention of moving into check, and checkmate detection.
const king = {function(YPos,XPos,pieceYPos,pieceXPos) {
  if ((YPos === (Math.abs(1+pieceYPos)) || (XPos === Math.abs(1+pieceXPos)))) {
    console.log("Return this square as legal to land on");
  } else {
    console.log("Return this square as not legal to land on");
  };
}

//pawns only move in one direction.  This function is if the pawn is on the upper side of the gameboard.  Also, there is a special case if they are on their starting square, and there is also Enpassant
const pawnNorth = {function(YPos,XPos,pieceYPos,pieceXPos) {
  if (((YPos === (1+pieceYPos)) && (Math.abs(XPos) === (1+pieceXPos))) || (YPos === (1+pieceYPos))) {
    console.log("Return this square as legal to land on");
  } else {
    console.log("Return this square as not legal to land on");
  };
}
