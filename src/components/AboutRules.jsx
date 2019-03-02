import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as math from 'mathjs';
import PropTypes from 'prop-types';

function AboutRules() {
  const compBox = {
    border: "solid cyan",
    backgroundColor: "light yellow",
    padding: "20px"
  }

  const pieceRules = { rules: [
    {id: 0, pieceName: "king", info: "Just like the modern king.  To win the game, you must checkmate the other player\'s king.  See additional rules.", symbol: "♔"},
    {id: 1, pieceName: "queen", info: "Just like the modern queen.  Note that the game does not initially start with any queens.", symbol: "♕"},
    {id: 2, pieceName: "rook", info: "Just like the modern rook.  It moves and captures horizontally and vertically.", symbol: "♖"},
    {id: 3, pieceName: "bishop", info: "Just like the modern bishop.  It moves and captures diagonally.", symbol: "♗"},
    {id: 4, pieceName: "knight", info: "Just like the modern knight.  It flies over in a L-shape.  We note the L-shape is 1-over, 2-up box.", symbol: "♘"},
    {id: 5, pieceName: "pawn", info: "Just like the modern pawn.  On it\'s starting square, it can move 1, or 2 moves forward.  It only moves 1 square vertically forward.  It only captures 1 square diagonally forward.  See additional rules.", symbol: "♙"},
    {id: 6, pieceName: "prince", info: "This is a new piece.  It moves like a king.  However, it is for the most part, a normal game piece.  See additional rules.", symbol: "⚔"},
    {id: 7, pieceName: "camel", info: "Think of this piece as a super-knight.  It moves in an L-shape, but the L-shape is 1-over, 3-up box", symbol: "⛰"},
    {id: 8, pieceName: "elephant", info: "This is a hybird of bishop and knight.  It moves diagonally 1 or 2 squares.  If it moves 2 diagonal squares, it can jump over any piece on the 1-diagonal.", symbol: "🐘"},
    {id: 9, pieceName: "cannon", info: "This piece is kind of like a rook.  It you are not capturing any piece, you can move horizontally and vertically as far as you want as long as you are unobstructed.  However, if you are capturing an enemy piece, you must jump over only 1 piece, friendly or not.", symbol: "☄"},
    {id: 10, pieceName: "ship", info: "This is a hybird of a knight and rook.  To move, it must go 1 square diagonally, but has no restriction on vertical movement.  The ship can\'t capture on the 1-square diagonal movement.  The ship can\'t jump over pieces like a knight.  This has almost the same power as a rook.", symbol: "⚓"},
    {id: 11, pieceName: "gryphon", info: "This is a super-ship.  It moves like the ship, however, it can do it in the horizontal axis as well.  It has the same 1-square diagonal capture restriction as the ship.  Like the ship, the gryphon can\'t jump over pieces like a knight.  This piece has almost the same power as a queen.", symbol: "S⚓S"}
    ]
  };

  const addtionalRules = { morerules: [
    {id: 0, ruleName: "King\'s Succession", info: "If the king is in checkmate, the game is not over if you have at least one prince not in check.  The player then swaps the positions of the king and prince on their turn.  The player who caused checkmate may then decide to capture or not the prince.  Since each player has two princes, they are essentially given 2 free escapes in the game.  Strategies used in modern chess which trade material for one checkmate are highly not advised.  These ensure that the game is prolonged."},
    {id: 1, ruleName: "En Passant", info: "Recall that pawns can move 2 squares forward from their starting square.  If an opponent does this to you such that you already had a pawn 1 square horizontally of their landing spot, you can automatically capture the opponents pawn as if it moved only 1-square forward."},
    {id: 2, ruleName: "Castling", info: "This does not exist in Tamerlame 2000 Chess."},
    {id: 3, ruleName: "Pawn Promotion", info: "Pawns promote only to queens when they reach the other side of the game board."},
    {id: 4, ruleName: "Prince Promotion", info: "When the prince reaches the opponent\'s pawn\'s row, they prince is promoted to queen."},
    {id: 5, ruleName: "Ship Promotion", info: "If a ship reaches the opponent\'s side of the game board, it is promoted to gryphon."},
    {id: 6, ruleName: "Wild Tamerlame Chess", info: "If the Tamerlame Chess 2000 rules are considered to slow of a game pace, then consider creating a different initial setup where the princes are replaced by queens, and ships replaced by gryphons.  Since there are no more princes, King\'s Succession is void."}
    ]
  };

  return (
    <div style={compBox}>
      <p>Reference Pieces:</p>
      <ul>
      <li>♔ king</li>
      <li>♕ queen</li>
      <li>♖ rook</li>
      <li>♗ bishop</li>
      <li>♘ knight</li>
      <li>♙ pawn</li>
      <li>⚔ prince</li>
      <li>⛰ camel</li>
      <li>🐘 elephant</li>
      <li>☄ cannon</li>
      <li>⚓ ship</li>
    </ul>
    </div>
  );
}

export default AboutRules;
