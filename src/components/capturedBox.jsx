import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function CapturedBox(props){
  const compBox = {
    border: "solid indigo",
  }
  return (
    <div style={compBox}>
      <h1>CAPTURED BOX: {props.capturedPieces}</h1>
    </div>
  );
}

export default CapturedBox;
