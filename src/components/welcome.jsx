import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Welcome(){
  const compBox = {
    border: "solid black",
    backgroundColor: "lightYellow",
  }

  return (
    <div style={compBox}>
    <h1>Welcome</h1>
    <p>This is a variation of traditional modern chess.  Modern chess itself is the result of centuries of evolution and change.  The rules for pre-modern chess were not uniform throughout the world.</p>
    <p>One of these variants came from medieval Perisa.  Called Tamerlame chess, this game would be considered very complex by today's chess standards.  A version of that old Tamerlame chess that attempts to revise the ancient rules for more modern play is called Tamerlame Chess 2000, which is this web application.</p>
    </div>
  );
}

export default Welcome;
