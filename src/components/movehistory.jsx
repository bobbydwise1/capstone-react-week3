import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function MoveHistory(){
  const compBox = {
    border: "solid green",
    backgroundColor: "light yellow",
  }
  return (
    <div style={compBox}>
      <h1>MOVE HISTORY</h1>
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

export default withRouter(connect(mapStateToProps)(MoveHistory));
