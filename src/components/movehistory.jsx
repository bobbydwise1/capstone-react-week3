import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MoveHistory(props){
  const compBox = {
    border: "solid green",
    backgroundColor: "light yellow",
  }

  console.log("What is MoveHistory.props? :" + JSON.stringify(props))

  return (
    <div style={compBox}>
      <h1>MOVE HISTORY: Current Turn Number: {props.currentMoveNumber}</h1>
      <div style={compBox}>
        <ol>
          <li>Move 1</li>
          <li>Move 2</li>
          <li>Move 3</li>
        </ol>
      </div>
    </div>
  );
}

MoveHistory.propTypes = {
  currentMovesObject: PropTypes.object
}

export default MoveHistory;
