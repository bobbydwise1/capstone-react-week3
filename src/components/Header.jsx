import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Header() {
  const compBox = {
    border: "solid orange",
    backgroundColor: "light yellow",
  }

  return (
    <div style={compBox}>
      <h1>Tamerlame Chess 2000</h1>
      <Link to="/">Home</Link> <Link to="/gameroute">Game</Link> <Link to="/AboutRules">About Rules</Link> <Link to="/signin">Sign In</Link> <Link to="/signout">Sign Out</Link>
    </div>
  );
}

export default Header;
