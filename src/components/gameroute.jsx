import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as math from 'mathjs';
import MoveHistory from './MoveHistory';
import Gameboard from './Gameboard';
import CapturedBox from './CapturedBox';
import PropTypes from 'prop-types';

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
      gridTemplateColumns: "1fr 2fr 1fr",
      padding: "10px",
      margin: "10px"
    }
    return (
      <div style={compBox}>
        <h1>This is the GameRoute Component.</h1>
        <div style={gameBoardGrid}>
          <MoveHistory></MoveHistory>
          <Gameboard></Gameboard>
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

export default GameRoute;
