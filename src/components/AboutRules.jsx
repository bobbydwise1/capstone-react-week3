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

  // const pieceRules = {
  //   InfoPawn:
  // }

  return (
    <div style={compBox}>
      <p>Reference Pieces:</p>
      <ul>
      <li>♔</li>
      <li>♕</li>
      <li>♖</li>
      <li>♗</li>
      <li>♘</li>
      <li>♙</li>
      <li>♚</li>
      <li>♛</li>
      <li>♜</li>
      <li>♝</li>
      <li>♞</li>
      <li>♟</li>
    </ul>
    </div>
  );
}

export default AboutRules;
