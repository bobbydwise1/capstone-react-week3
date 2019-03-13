import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as math from 'mathjs';
import PropTypes from 'prop-types';

function MoveHistory(props) {

  const compBox = {
    border: "solid green",
    backgroundColor: "light yellow",
  }

  // console.log("What is JSON.stringify(props)? :" + JSON.stringify(props))

  return (
    <div style={compBox}>
      <h1>MOVE HISTORY: Current Turn Number: <a>{props.currentMoveNumber}</a></h1>
      <div style={compBox}>
        <ul>
          {Object.keys(props.moveHistory).map(function(moveId) {
            var item = props.moveHistory[moveId];
            return (<li><h2># {item.moveId} : {item.pieceMoved} from ({item.from[0]},{item.from[1]}) to ({item.to[0]},{item.to[1]}).</h2></li>)
          })
          }
        </ul>
      </div>
    </div>
  );
}

export default MoveHistory;
