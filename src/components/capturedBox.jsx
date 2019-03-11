import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function CapturedBox(){
  const compBox = {
    border: "solid indigo",
  }
  return (
    <div style={compBox}>
      <h1>CAPTURED BOX</h1>
    </div>
  );
}

export default withRouter(connect(mapStateToProps)(CapturedBox));
