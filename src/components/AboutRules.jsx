import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as math from 'mathjs';
import PropTypes from 'prop-types';

function AboutRules() {
  const compBox = {
    border: "solid cyan",
    backgroundColor: "light yellow",
  }

  const pieceRules = { rules: [
    {id: 0, points: 10000, pieceName: "King", info: "Just like the modern king.  To win the game, you must checkmate the other player\'s king... up to three times.  See additional rules for more info.", symbol: "♔"},
    {id: 1, points: 820, pieceName: "Queen", info: "Just like the modern queen.  It can move in all 8 directions if unobstructed.  Note that the game does not initially start with any queens.", symbol: "♕"},
    {id: 2, points: 500, pieceName: "Rook", info: "Just like the modern rook.  It moves and captures horizontally and vertically.", symbol: "♖"},
    {id: 3, points: 340, pieceName: "Bishop", info: "Just like the modern bishop.  It moves and captures diagonally.", symbol: "♗"},
    {id: 4, points: 250, pieceName: "Knight", info: "Just like the modern knight.  It flies over in a L-shape.  We note the L-shape is 1-over, 2-up box.", symbol: "♘"},
    {id: 5, points: 60, pieceName: "Pawn", info: "Just like the modern pawn.  On it\'s starting square, it can move 1 or 2 moves forward.  Otherwise it only moves 1 square vertically forward.  However, it can't capture directly forward.  It only captures 1 square diagonally forward.  See additional rules.", symbol: "♙"},
    {id: 6, points: 300, pieceName: "Prince", info: "This is a new piece.  It moves like a king.  However, it is for the most part, a normal game piece.  See additional rules.", symbol: "🤴"},
    {id: 7, points: 220, pieceName: "Camel", info: "Think of this piece as a super-knight.  It moves in an L-shape, but the L-shape is 1-over, 3-up box.  We note that the camel always stays on the same color square.", symbol: "🐫"},
    {id: 8, points: 250, pieceName: "Elephant", info: "This is a hybird of bishop and knight.  It moves diagonally 1 or 2 squares.  If it moves 2 diagonal squares, it can jump over any piece on the 1-diagonal.  Another way to think of the elephant is it\'s a knight that can hop over to 1 diagonal or 2 diagonals, instead of a L-shape.", symbol: "🐘"},
    {id: 9, points: 490, pieceName: "Cannon", info: "This piece is kind of like a rook.  It you are not capturing any piece, you can move horizontally and vertically as far as you want as long as you are unobstructed.  However, if you are capturing an enemy piece, you must jump over only 1 piece, friendly or not.", symbol: "🔫"},
    {id: 10, points: 440, pieceName: "Ship", info: "This is a hybird of a knight and rook.  To move, it must go 1 square diagonally, but has no restriction on vertical movement.  The ship can\'t capture on the 1-square diagonal movement.  The ship can\'t jump over pieces like a knight.  This has almost the same power as a rook.", symbol: "⚓"},
    {id: 11, points: 770, pieceName: "Gryphon", info: "This is a super-ship.  It moves like the ship, however, it can do it in the horizontal axis as well.  It has the same 1-square diagonal capture restriction as the ship.  Like the ship, the gryphon can\'t jump over pieces like a knight.  This piece has almost the same power as a queen.  Note that a normal game does not start with any gryphons.", symbol: "🦅"}
    ]
  };

  const additionalRules = { moreRules: [
    {id: 0, ruleName: "♔ 🤴 🤴 King\'s Succession", info: "If the king is in checkmate, the game is not over if you have at least one prince which is not in check.  The checkmated player then swaps the positions of the king and prince on their entire turn.  The player who caused checkmate may then decide to capture or not capture the prince.  Since each player has two princes, players are essentially given 2 free escapes in the game, extending the game time."},
    {id: 1, ruleName: "♙ En Passant", info: "Pawns can move 2 squares forward from their starting square.  If an opponent does this to you such that you already had a pawn 1 square horizontally of their landing spot, you can automatically capture the opponents pawn as if it moved only 1-square forward."},
    {id: 2, ruleName: "♔ ♖ No Castling", info: "This does not exist in this variant."},
    {id: 3, ruleName: "♙ ♕ Pawn Promotion to Queen", info: "Pawns promote only to queens when they reach the other side of the game board."},
    {id: 4, ruleName: "🤴 ♕ Prince Promotion to Queen", info: "When the prince reaches the opponent\'s pawn\'s row, they prince is promoted to queen.  Endgame queens typically spell doom for the oppossing player."},
    {id: 5, ruleName: "⚓ 🦅 Ship Promotion to Gryphon", info: "If a ship reaches the opponent\'s side of the game board, it is promoted to gryphon.  Likewise, endgame gryphons typically spell doom for the other player."},
    {id: 6, ruleName: "♕ 🦅 Wild Tamerlane Chess (variant)", info: "If the Tamerlane Chess 2000 rules are considered to slow of a game pace, then consider creating a different initial setup where the princes are replaced by queens, and ships replaced by gryphons.  Since there are no more princes, King\'s Succession is void."},
    {id: 7, ruleName: "🏰 Ancient Citadel", info: "This square does not do anything on this version of the game."}
    ]
  };

  return (
    <div style={compBox}>
      <div style={compBox}>
        <h2>Game Pieces:</h2>
        <ul>
          <li><h1>{pieceRules.rules[0].symbol} {pieceRules.rules[0].pieceName}</h1> <h3>Points Value: {pieceRules.rules[0].points}</h3> <p>{pieceRules.rules[0].info}</p></li>
          <li><h1>{pieceRules.rules[1].symbol} {pieceRules.rules[1].pieceName}</h1> <h3>Points Value: {pieceRules.rules[1].points}</h3> <p>{pieceRules.rules[1].info}</p></li>
          <li><h1>{pieceRules.rules[2].symbol} {pieceRules.rules[2].pieceName}</h1> <h3>Points Value: {pieceRules.rules[2].points}</h3> <p>{pieceRules.rules[2].info}</p></li>
          <li><h1>{pieceRules.rules[3].symbol} {pieceRules.rules[3].pieceName}</h1> <h3>Points Value: {pieceRules.rules[3].points}</h3> <p>{pieceRules.rules[3].info}</p></li>
          <li><h1>{pieceRules.rules[4].symbol} {pieceRules.rules[4].pieceName}</h1> <h3>Points Value: {pieceRules.rules[4].points}</h3> <p>{pieceRules.rules[4].info}</p></li>
          <li><h1>{pieceRules.rules[5].symbol} {pieceRules.rules[5].pieceName}</h1> <h3>Points Value: {pieceRules.rules[5].points}</h3> <p>{pieceRules.rules[5].info}</p></li>
          <li><h1>{pieceRules.rules[6].symbol} {pieceRules.rules[6].pieceName}</h1> <h3>Points Value: {pieceRules.rules[6].points}</h3> <p>{pieceRules.rules[6].info}</p></li>
          <li><h1>{pieceRules.rules[7].symbol} {pieceRules.rules[7].pieceName}</h1> <h3>Points Value: {pieceRules.rules[7].points}</h3> <p>{pieceRules.rules[7].info}</p></li>
          <li><h1>{pieceRules.rules[8].symbol} {pieceRules.rules[8].pieceName}</h1> <h3>Points Value: {pieceRules.rules[8].points}</h3> <p>{pieceRules.rules[8].info}</p></li>
          <li><h1>{pieceRules.rules[9].symbol} {pieceRules.rules[9].pieceName}</h1> <h3>Points Value: {pieceRules.rules[9].points}</h3> <p>{pieceRules.rules[9].info}</p></li>
          <li><h1>{pieceRules.rules[10].symbol} {pieceRules.rules[10].pieceName}</h1> <h3>Points Value: {pieceRules.rules[10].points}</h3> <p>{pieceRules.rules[10].info}</p></li>
          <li><h1>{pieceRules.rules[11].symbol} {pieceRules.rules[11].pieceName}</h1> <h3>Points Value: {pieceRules.rules[11].points}</h3> <p>{pieceRules.rules[11].info}</p></li>
      </ul>
    </div>

    <div style={compBox}>
      <h2>Additional Rules:</h2>
        <ul>
          <li><h1>{additionalRules.moreRules[0].ruleName}</h1>
            <p>{additionalRules.moreRules[0].info}</p>
          </li>
          <li><h1>{additionalRules.moreRules[1].ruleName}</h1>
            <p>{additionalRules.moreRules[1].info}</p>
          </li>
          <li><h1>{additionalRules.moreRules[2].ruleName}</h1>
            <p>{additionalRules.moreRules[2].info}</p>
          </li>
          <li><h1>{additionalRules.moreRules[3].ruleName}</h1>
            <p>{additionalRules.moreRules[3].info}</p>
          </li>
          <li><h1>{additionalRules.moreRules[4].ruleName}</h1>
            <p>{additionalRules.moreRules[4].info}</p>
          </li>
          <li><h1>{additionalRules.moreRules[5].ruleName}</h1>
            <p>{additionalRules.moreRules[5].info}</p>
          </li>
          <li><h1>{additionalRules.moreRules[6].ruleName}</h1>
            <p>{additionalRules.moreRules[6].info}</p>
          </li>
          <li><h1>{additionalRules.moreRules[7].ruleName}</h1>
            <p>{additionalRules.moreRules[7].info}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutRules;
