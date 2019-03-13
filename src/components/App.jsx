import React from 'react';
import Header from './Header';
import MoveHistory from './MoveHistory';
import Welcome from './Welcome';
// import GameRoute from './Gameroute';
import Gameboard from './gameboard';
import AboutRules from './AboutRules';
import Error404 from './Error404';
import { Switch, Route, Link } from 'react-router-dom';

function App(){
  const topLineImageStyle = {
    margin: "0 auto 0 auto",
    display: "inline-block",
  }
  const mainImageStyle = {
    width: "10%",
    height: "auto"
  }
  const compBox = {
    border: "solid red",
    backgroundColor: "light yellow",
  }

  return (
    <div style={compBox}>
      <Header/>
      <Switch>
        <Route exact path='/' component={Welcome}/>
        <Route path='/GameBoard' component={Gameboard}/>
        <Route path='/AboutRules' component={AboutRules}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
