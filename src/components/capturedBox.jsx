import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function CapturedBox(){
  const compBox = {
    border: "solid indigo"
  }
  return (
    <h1 style={compBox}>CAPTURED BOX</h1>
  );
}

export default CapturedBox;
