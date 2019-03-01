import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function MoveHistory(){
  const compBox = {
    border: "solid green",
    backgroundColor: "light yellow"
  }
  return (
    <h1 style={compBox}>MOVE HISTORY</h1>
  );
}

export default MoveHistory;
