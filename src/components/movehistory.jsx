import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as math from 'mathjs';
import PropTypes from 'prop-types';

class MoveHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const compBox = {
      border: "solid green",
      backgroundColor: "light yellow",
    }

    console.log("What is this? :" + this.props.moveHistory)
    console.log("What is this? JSON :" + JSON.stringify(this.props.moveHistory))

    const dummyTest = {
      moveNumber: 222
    }
//need to fix the array render for move history to properly loop the list
    return (
      <div style={compBox}>
        <h1>MOVE HISTORY: Current Turn Number: {this.props.moveNumber}</h1>
        <div style={compBox}>
          <ol>
            <li>{this.props.moveHistory[0]}</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default MoveHistory;
