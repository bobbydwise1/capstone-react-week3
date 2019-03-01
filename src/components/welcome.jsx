import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Welcome(){
  const compBox = {
    border: "solid black",
    backgroundColor: "light yellow"
  }

  return (
    <h1 style={compBox}>Welcome</h1>
  );
}

export default Welcome;
