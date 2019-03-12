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

    console.log("What is this? :" + this.state)
    console.log("What is this? JSON :" + JSON.stringify(this.state))

    const dummyTest = {
      moveNumber: 222
    }

    return (
      <div style={compBox}>
        <h1>MOVE HISTORY: Current Turn Number: {this.props.moveNumber}</h1>
        <div style={compBox}>
          <ol>
            <li>Move 1</li>
            <li>Move 2</li>
            <li>Move 3</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default MoveHistory;
