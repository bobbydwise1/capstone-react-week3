import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function ChatBox(){
  const compBox = {
    border: "solid violet",
  }
  return (
    <div>
    <h1 style={compBox}>CHATBOX</h1>
    </div>
  );
}

export default withRouter(connect(mapStateToProps)(ChatBox));
