import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as math from 'mathjs';
import Gameboard from './Gameboard';
import PropTypes from 'prop-types';

class GameRoute extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    // this.handleAddingGameState = this.handleAddingGameState.bind(this);
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
          <Gameboard ></Gameboard>
        </div>
      </div>
    );
  }
}

// GameRoute.propTypes = {
//   gameSystem: PropTypes.object
// };
//
// const mapStateToProps = state => {
//   return {
//     gameSystem: state.gameSystem
//   };
// };

export default GameRoute;
