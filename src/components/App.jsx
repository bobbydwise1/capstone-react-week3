import React from 'react';
import Header from './Header';
import MoveHistory from './movehistory';
import Welcome from './welcome';
import GameRoute from './gameroute';
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
    backgroundColor: "light yellow"
  }

  return (
    <div style={compBox}>
      <Header/>
      <Switch>
        <Route exact path='/' component={Welcome}/>
        <Route path='/gameroute' component={GameRoute}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
