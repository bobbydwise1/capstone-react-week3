import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Welcome from './Welcome';
import GameRoute from './Gameroute';
import AboutRules from './AboutRules';
import Error404 from './Error404';

let action;

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      gameSystem: gameSystem,
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
          <Route exact path='/' render={ () => <Welcome currentRouterPath={props.location.pathname}/>} />
          <Route path='/GameRoute' render={ () => <GameRoute gameSystem={this.props.gameSystem} />} currentRouterPath={props.location.pathname} />
          <Route path='/AboutRules' render={ () => <AboutRules/>} currentRouterPath={props.location.pathname} />
        <Route component={Error404}/>} />
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
