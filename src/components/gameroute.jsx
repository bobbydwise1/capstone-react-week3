import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import * as math from 'mathjs';
import MoveHistory from './MoveHistory';
import Gameboard from './Gameboard';
import CapturedBox from './CapturedBox';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class GameRoute extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      }
    }

  render() {
    const compBox = {
      border: "solid yellow",
      backgroundColor: "light yellow",
    }

    const gameBoardGrid = {
      display: "grid",
      gridTemplateColumns: "1fr",
      padding: "10px",
      margin: "10px"
    }
    return (
      <div style={compBox}>
        <p>GameRoute Component</p>
        <div style={gameBoardGrid}>
          <Gameboard></Gameboard>
          <MoveHistory></MoveHistory>
          <CapturedBox></CapturedBox>
        </div>
      </div>
    );
  }
}

GameRoute.propTypes = {
  gameSystem: PropTypes.object
};

const mapStateToProps = state => {
  return {
    gameSystem: state.gameSystem
  };
};

export default withRouter(connect(mapStateToProps)(GameRoute));
