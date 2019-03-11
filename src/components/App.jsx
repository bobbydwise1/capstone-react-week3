import React from 'react';
import Header from './Header';
import MoveHistory from './MoveHistory';
import Welcome from './Welcome';
import GameRoute from './Gameroute';
import AboutRules from './AboutRules';
import Error404 from './Error404';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      gameSystem: this.state.gameSystem
    };
  }

  render() {
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
          <Route exact path='/' render={()=><Welcome currentRouterPath={props.location.pathname}/>} />
          <Route path='/GameRoute' render={()=><GameRoute gameSystem={this.props.gameSystem}/>} currentRouterPath={props.location.pathname} />
          <Route path='/AboutRules' render={()=><AboutRules/>} currentRouterPath={props.location.pathname}/>
          <Route render={()=><Error404/>} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  gameSystem: PropTypes.object
};

const mapStateToProps = state => {
  return {
    gameSystem: state.gameSystem
  };
};

export default withRouter(connect(mapStateToProps)(App));
