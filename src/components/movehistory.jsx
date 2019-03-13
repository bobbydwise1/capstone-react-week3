import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as math from 'mathjs';
import PropTypes from 'prop-types';

function MoveHistory(props) {

  const compBox = {
    border: "solid green",
    backgroundColor: "light yellow",
  }

  console.log("What is JSON.stringify(props)? :" + JSON.stringify(props))

  const dummyTest = {
    moveNumber: 222
  }

  return (
    <div style={compBox}>
      <h1>MOVE HISTORY: Current Turn Number: <a>{props.currentMoveNumber}</a></h1>
      <div style={compBox}>
        <ol>
          {JSON.stringify(props.moveHistory)}
        </ol>
      </div>
    </div>
  );
}

export default MoveHistory;
