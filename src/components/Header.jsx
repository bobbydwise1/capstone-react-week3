import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function Header() {
  const compBox = {
    border: "solid orange",
    backgroundColor: "light yellow",
    textAlign: "center"
  }

  return (
    <div style={compBox}>
      <h1>Tamerlame Chess 2000</h1>
      <p><Link to="/">Home</Link> <Link to="/gameroute">Game</Link> <Link to="/AboutRules">About Rules</Link> <Link to="/signin">Sign In</Link> <Link to="/signout">Sign Out</Link></p>
    </div>
  );
}

export default withRouter(connect()(Header));
