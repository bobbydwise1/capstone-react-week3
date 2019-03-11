import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function Error404(){
  const compBox = {
    border: "solid black",
  }
  return (
    <div style={compBox}>
      <h2>The page you are looking for does not exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
    </div>
  );
}

export default withRouter(connect(mapStateToProps)(Error404));
