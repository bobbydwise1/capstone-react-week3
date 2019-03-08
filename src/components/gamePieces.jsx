import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as math from 'mathjs';

function GamePieces(){
  const compBox = {
    border: "solid black",
    backgroundColor: "light yellow",
  };

  const GridElevenStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    gridAutoRows: "min-content",
    margin: "1"
  };

//consider making each piece a class
  const king = math.matrix([
    [1,1,1],
    [1,-1,1],
    [1,1,1]
  ]);
  const bishop = math.matrix([
    [11,0,11],
    [0,-1,0],
    [11,0,11]
  ]);
  const knight = math.matrix([
    [0,1,0,1,0],
    [1,0,0,0,1],
    [0,0,-1,0,0],
    [1,0,0,0,1],
    [0,1,0,1,0],
  ]);
  const rook = math.matrix([
    [0,11,0],
    [11,-1,11],
    [0,11,0]
  ]);
  const prince = math.matrix([
    [1,1,1],
    [1,-1,1],
    [1,1,1]
  ]);  //note aka man.  Moves like a king, but does not have check and checkmate rules.  If the king is in check, it can be swapped with a prince.  Was used as a playing piece in medieval germany.
  const elephant = math.matrix([
    [1,0,0,0,1],
    [0,1,0,1,0],
    [0,0,-1,0,0],
    [0,1,0,1,0],
    [1,0,0,0,1],
  ]); //note can fly over the 1st diagonal if moving 2 spaces - need to add code for this?
  const cannon = math.matrix([
    [0,11,0],
    [11,-1,11],
    [0,11,0]
  ]);  //note in order to capture it piece, it must jump over a middle piece, otherwise it can't capture.  need to add code for this.
  const ship = math.matrix([
    [11,0,11],
    [1,0,1],
    [0,-1,0],
    [1,0,1],
    [11,0,11]
  ]);  //note, jumps diagonally 1, and then can move the entire vertical.  Comparable power as rook and bishop.  A "gryphon" is an alt piece that can do this horizontally as well, and quickly ends the game.
  const pawn = math.matrix([
    [0,1,0],
    [1,1,1],
    [0,-1,0],
    [0,0,0]
  ]);  //note promots to queen on last rank
  const queen = math.matrix([
    [11,11,11],
    [11,-1,11],
    [11,11,11]
  ]); //note does not initially appear in game.  Pawn promots to queen on last rank, prince promotes to queen on 9th rank.

  return (
    <h1 style={compBox}>Gamepieces</h1>
      <div>
        <div><h1>1</h1></div>
        <div><h1>2</h1></div>
        <div><h1>3</h1></div>
      </div>
  );
}

export default GamePieces;
