import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as math from 'mathjs';
import PropTypes from 'prop-types';
import MoveHistory from './MoveHistory';
import CapturedBox from './CapturedBox';


class Square extends React.Component {
  render() {
    let boxColorDark = {
      backgroundColor: 'green',
      width: '70px',
      height: '70px',
      verticalAlign: "middle",
      textAlign:  "center",
      fontSize: "32pt"
    };
    let boxColorLight = {
      backgroundColor: 'white',
      width: '70px',
      height: '70px',
      verticalAlign: "middle",
      textAlign:  "center",
      fontSize: "32pt"
    };
    // console.log("what is this color? " + JSON.stringify(this.props))
    if ((this.props.yPos%2===1 && this.props.xPos%2===0) || (this.props.yPos%2===0 && this.props.xPos%2===1))
    {return (
      <div style={boxColorDark}
      className="square" onClick={() => this.props.onClick()}>{this.props.value}</div>
    );}
    else
    {return (
      <div style={boxColorLight}
      className="square" onClick={() => this.props.onClick()}>{this.props.value}</div>
    );}
  }
}



class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moveHistory: [],
      currentMoveNumber: 1,
      capturedPieces: [],
      currentPlayerOneTurn: true,
      currentSelectedPieceValue: 0,
      currentSelectedPieceYPos: null,
      currentSelectedPieceXPos: null,
      currentlyMovingAPiece: false,
      gameSystem: math.matrix([
        [1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,'🐘','','🐫','','🔫','','🔫','','🐫','','🐘',1],
        [1,'♜','♞','♝','⚓','🤴','♚','🤴','⚓','♝','♞','♜',1],
        [1,'♟','♟','♟','♟','♟','♟','♟','♟','♟','♟','♟',1],
        [1,'','','','','','','','','','','',1],
        [1,'','','','','','','','','','','',1],
        [1,'','','','','','','','','','','',1],
        [1,'','','','','','','','','','','',1],
        [1,'','','','','','','','','','','',1],
        [1,'♙','♙','♙','♙','♙','♙','♙','♙','♙','♙','♙',1],
        [1,'♖','♘','♗','⚓','🤴','♔','🤴','⚓','♗','♘','♖',1],
        [1,'🐘','','🐫','','🔫','','🔫','','🐫','','🐘',1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1]
      ]),
    };
  }

  handleClick(yPos,xPos) {
    let temp = this.state
    console.log("----CLICK START----MOVE # ",this.state.currentMoveNumber)
    // console.log("What is temp? : " + JSON.stringify(temp));
    if (temp.currentlyMovingAPiece === false) {
      temp.currentSelectedPieceYPos = yPos;
      temp.currentSelectedPieceXPos = xPos;
      temp.currentSelectedPieceValue = this.state.gameSystem._data[yPos][xPos];
      temp.currentlyMovingAPiece = true;
    } else {
      if (temp.gameSystem._data[yPos][xPos] != "") {temp.capturedPieces.push(temp.gameSystem._data[yPos][xPos])}
      temp.gameSystem._data[temp.currentSelectedPieceYPos][temp.currentSelectedPieceXPos] = '';
      temp.gameSystem._data[yPos][xPos] = temp.currentSelectedPieceValue;
      temp.moveHistory.push({moveId: temp.currentMoveNumber, pieceMoved: temp.currentSelectedPieceValue, from: [temp.currentSelectedPieceYPos, temp.currentSelectedPieceXPos], to: [yPos, xPos]})
      temp.currentSelectedPieceYPos = null;
      temp.currentSelectedPieceXPos = null;
      temp.currentSelectedPieceValue = '0';
      temp.currentMoveNumber++;
      temp.currentlyMovingAPiece = false;
    }
    this.setState({state: temp.state})
    console.log("system state AFTER handle: " + JSON.stringify(this.state));
    console.log("----CLICK END----MOVE # ",this.state.currentMoveNumber)
  };

  renderSquare(yPos,xPos) {
    return (
      <Square yPos={yPos} xPos={xPos}  value={this.state.gameSystem._data[yPos][xPos]} onClick={() => this.handleClick(yPos,xPos)}/>
    );
  }

  render() {

    const compBox = {
      border: "solid blue",
      backgroundColor: "light yellow",
    }

    const gridContainer = {
      display: "grid",
      maxWidth: "910px",
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
      gridColumnGap: "0px",
      gridRowGap: "0px",
      backgroundColor: "light grey",
      border: "solid grey",
      margin: "auto",
    }

    const gridItem = {
      backgroundColor: "lightGrey",
      width: '70px',
      height: '70px',
      verticalAlign: "middle",
      textAlign:  "center",
      fontSize: "32pt"
    }

    const gridOuter = {
      backgroundColor: "darkGrey",
      width: '70px',
      height: '70px',
      verticalAlign: "middle",
      textAlign:  "center",
      fontSize: "32pt"
    }

    return (
      <div style={compBox}>
         <div style={gridContainer}>
           <div style={gridOuter}></div>
           <div style={gridOuter}></div>
           <div style={gridOuter}>G</div>
           <div style={gridOuter}>A</div>
           <div style={gridOuter}>M</div>
           <div style={gridOuter}>E</div>
           <div style={gridOuter}>B</div>
           <div style={gridOuter}>O</div>
           <div style={gridOuter}>A</div>
           <div style={gridOuter}>R</div>
           <div style={gridOuter}>D</div>
           <div style={gridOuter}></div>
           <div style={gridOuter}></div>

           <div style={gridOuter}>1</div>
             {this.renderSquare(1,1)}
             {this.renderSquare(1,2)}
             {this.renderSquare(1,3)}
             {this.renderSquare(1,4)}
             {this.renderSquare(1,5)}
             {this.renderSquare(1,6)}
             {this.renderSquare(1,7)}
             {this.renderSquare(1,8)}
             {this.renderSquare(1,9)}
             {this.renderSquare(1,10)}
             {this.renderSquare(1,11)}
           <div style={gridOuter}></div>

           <div style={gridOuter}>🏰</div>
             {this.renderSquare(2,1)}
             {this.renderSquare(2,2)}
             {this.renderSquare(2,3)}
             {this.renderSquare(2,4)}
             {this.renderSquare(2,5)}
             {this.renderSquare(2,6)}
             {this.renderSquare(2,7)}
             {this.renderSquare(2,8)}
             {this.renderSquare(2,9)}
             {this.renderSquare(2,10)}
             {this.renderSquare(2,11)}
           <div style={gridOuter}></div>

           <div style={gridOuter}>3</div>
             {this.renderSquare(3,1)}
             {this.renderSquare(3,2)}
             {this.renderSquare(3,3)}
             {this.renderSquare(3,4)}
             {this.renderSquare(3,5)}
             {this.renderSquare(3,6)}
             {this.renderSquare(3,7)}
             {this.renderSquare(3,8)}
             {this.renderSquare(3,9)}
             {this.renderSquare(3,10)}
             {this.renderSquare(3,11)}
           <div style={gridOuter}></div>

           <div style={gridOuter}>4</div>
             {this.renderSquare(4,1)}
             {this.renderSquare(4,2)}
             {this.renderSquare(4,3)}
             {this.renderSquare(4,4)}
             {this.renderSquare(4,5)}
             {this.renderSquare(4,6)}
             {this.renderSquare(4,7)}
             {this.renderSquare(4,8)}
             {this.renderSquare(4,9)}
             {this.renderSquare(4,10)}
             {this.renderSquare(4,11)}
           <div style={gridOuter}></div>

           <div style={gridOuter}>5</div>
             {this.renderSquare(5,1)}
             {this.renderSquare(5,2)}
             {this.renderSquare(5,3)}
             {this.renderSquare(5,4)}
             {this.renderSquare(5,5)}
             {this.renderSquare(5,6)}
             {this.renderSquare(5,7)}
             {this.renderSquare(5,8)}
             {this.renderSquare(5,9)}
             {this.renderSquare(5,10)}
             {this.renderSquare(5,11)}
           <div style={gridOuter}></div>

           <div style={gridOuter}>6</div>
             {this.renderSquare(6,1)}
             {this.renderSquare(6,2)}
             {this.renderSquare(6,3)}
             {this.renderSquare(6,4)}
             {this.renderSquare(6,5)}
             {this.renderSquare(6,6)}
             {this.renderSquare(6,7)}
             {this.renderSquare(6,8)}
             {this.renderSquare(6,9)}
             {this.renderSquare(6,10)}
             {this.renderSquare(6,11)}
           <div style={gridOuter}></div>

           <div style={gridOuter}>7</div>
             {this.renderSquare(7,1)}
             {this.renderSquare(7,2)}
             {this.renderSquare(7,3)}
             {this.renderSquare(7,4)}
             {this.renderSquare(7,5)}
             {this.renderSquare(7,6)}
             {this.renderSquare(7,7)}
             {this.renderSquare(7,8)}
             {this.renderSquare(7,9)}
             {this.renderSquare(7,10)}
             {this.renderSquare(7,11)}
           <div style={gridOuter}></div>

           <div style={gridOuter}>8</div>
             {this.renderSquare(8,1)}
             {this.renderSquare(8,2)}
             {this.renderSquare(8,3)}
             {this.renderSquare(8,4)}
             {this.renderSquare(8,5)}
             {this.renderSquare(8,6)}
             {this.renderSquare(8,7)}
             {this.renderSquare(8,8)}
             {this.renderSquare(8,9)}
             {this.renderSquare(8,10)}
             {this.renderSquare(8,11)}
           <div style={gridOuter}></div>

           <div style={gridOuter}>9</div>
             {this.renderSquare(9,1)}
             {this.renderSquare(9,2)}
             {this.renderSquare(9,3)}
             {this.renderSquare(9,4)}
             {this.renderSquare(9,5)}
             {this.renderSquare(9,6)}
             {this.renderSquare(9,7)}
             {this.renderSquare(9,8)}
             {this.renderSquare(9,9)}
             {this.renderSquare(9,10)}
             {this.renderSquare(9,11)}
           <div style={gridOuter}></div>

           <div style={gridOuter}>10</div>
             {this.renderSquare(10,1)}
             {this.renderSquare(10,2)}
             {this.renderSquare(10,3)}
             {this.renderSquare(10,4)}
             {this.renderSquare(10,5)}
             {this.renderSquare(10,6)}
             {this.renderSquare(10,7)}
             {this.renderSquare(10,8)}
             {this.renderSquare(10,9)}
             {this.renderSquare(10,10)}
             {this.renderSquare(10,11)}
           <div style={gridOuter}>🏰</div>

           <div style={gridOuter}>11</div>
             {this.renderSquare(11,1)}
             {this.renderSquare(11,2)}
             {this.renderSquare(11,3)}
             {this.renderSquare(11,4)}
             {this.renderSquare(11,5)}
             {this.renderSquare(11,6)}
             {this.renderSquare(11,7)}
             {this.renderSquare(11,8)}
             {this.renderSquare(11,9)}
             {this.renderSquare(11,10)}
             {this.renderSquare(11,11)}
           <div style={gridOuter}></div>

           <div style={gridOuter}></div>
           <div style={gridOuter}>1</div>
           <div style={gridOuter}>2</div>
           <div style={gridOuter}>3</div>
           <div style={gridOuter}>4</div>
           <div style={gridOuter}>5</div>
           <div style={gridOuter}>6</div>
           <div style={gridOuter}>7</div>
           <div style={gridOuter}>8</div>
           <div style={gridOuter}>9</div>
           <div style={gridOuter}>10</div>
           <div style={gridOuter}>11</div>
           <div style={gridOuter}></div>

         </div>
         <MoveHistory
           currentMoveNumber={this.state.currentMoveNumber}
           moveHistory={this.state.moveHistory}
         />
         <CapturedBox
           capturedPieces={this.state.capturedPieces}
           />
      </div>

    );
  }
}

export default Gameboard;
