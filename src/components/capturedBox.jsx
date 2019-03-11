import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

function CapturedBox(){
  const compBox = {
    border: "solid indigo",
  }
  return (
    <h1 style={compBox}>CAPTURED BOX</h1>
  );
}

export default connect()(CapturedBox);
