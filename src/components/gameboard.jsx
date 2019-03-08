import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as math from 'mathjs';
import PropTypes from 'prop-types';

class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameSystem: math.matrix([
        [1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,'🐘',0,'🐫',0,'🔫',0,'🔫',0,'🐫',0,'🐘',1],
        [1,'♖','♘','♗','⚓','🤴','♔','🤴','⚓','♗','♘','♖',1],
        [1,'♙','♙','♙','♙','♙','♙','♙','♙','♙','♙','♙',1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,'♙','♙','♙','♙','♙','♙','♙','♙','♙','♙','♙',1],
        [1,'♖','♘','♗','⚓','🤴','♔','🤴','⚓','♗','♘','♖',1],
        [1,'🐘',0,'🐫',0,'🔫',0,'🔫',0,'🐫',0,'🐘',1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1]
      ]),
    };
  }

  handleClick(yPos,xPos) {
    const gameSystem = this.state.gameSystem.slice();
    gameSystem._data[yPos][xPos] = "X";
    this.setState({gameSystem: gameSystem});
  };

  renderSquare(yPos,xPos) {
    return (
      <div style={gridItem}><button className="square" onClick={() => this.handleClick(yPos,xPos)} style={gridItem}>{this.state.gameSystem._data[yPos][xPos]}</button></div>
    )
  }

  render() {

    const compBox = {
      border: "solid blue",
      backgroundColor: "light yellow",
    }

    const gridContainer = {
      display: "grid",
      maxWidth: "780px",
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
      gridColumnGap: "0px",
      gridRowGap: "0px",
      backgroundColor: "light grey",
      border: "solid grey",
      margin: "auto",
    }

    const gridItem = {
      backgroundColor: "lightGrey",
      width: '60px',
      height: '60px',
      verticalAlign: "middle",
      textAlign:  "center",
      fontSize: "30pt"
    }

    const gridOuter = {
      backgroundColor: "darkGrey",
      width: '60px',
      height: '60px',
      verticalAlign: "middle",
      textAlign:  "center",
      fontSize: "30pt"
    }

    // const gameSystem = math.matrix([
    //   [1,1,1,1,1,1,1,1,1,1,1,1,1],
    //   [1,0,0,0,0,0,0,0,0,0,0,0,1],
    //   [1,0,0,0,0,0,0,0,0,0,0,0,1],
    //   [1,0,0,0,0,0,0,0,0,0,0,0,1],
    //   [1,0,0,0,0,0,0,0,0,0,0,0,1],
    //   [1,0,0,0,0,0,0,0,0,0,0,0,1],
    //   [1,0,0,0,0,0,0,0,0,0,0,0,1],
    //   [1,0,0,0,0,0,0,0,0,0,0,0,1],
    //   [1,0,0,0,0,0,0,0,0,0,0,0,1],
    //   [1,0,0,0,0,0,0,0,0,0,0,0,1],
    //   [1,1,1,1,1,1,1,1,1,1,1,1,1],
    // ]);

    // const gameSystem = math.matrix([
    //   [1,1,1,1,1,1,1,1,1,1,1,1,1],
    //   [1,'🐘',0,'🐫',0,'🔫',0,'🔫',0,'🐫',0,'🐘',1],
    //   [1,'♖','♘','♗','⚓','🤴','♔','🤴','⚓','♗','♘','♖',1],
    //   [1,'♙','♙','♙','♙','♙','♙','♙','♙','♙','♙','♙',1],
    //   [1,0,0,0,0,0,0,0,0,0,0,0,1],
    //   [1,0,0,0,0,0,0,0,0,0,0,0,1],
    //   [1,0,0,0,0,0,0,0,0,0,0,0,1],
    //   [1,0,0,0,0,0,0,0,0,0,0,0,1],
    //   [1,0,0,0,0,0,0,0,0,0,0,0,1],
    //   [1,'♙','♙','♙','♙','♙','♙','♙','♙','♙','♙','♙',1],
    //   [1,'♖','♘','♗','⚓','🤴','♔','🤴','⚓','♗','♘','♖',1],
    //   [1,'🐘',0,'🐫',0,'🔫',0,'🔫',0,'🐫',0,'🐘',1],
    //   [1,1,1,1,1,1,1,1,1,1,1,1,1]
    // ]);

    //React method to render a grid via loop

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
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[1][1]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[1][2]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[1][3]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[1][4]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[1][5]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[1][6]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[1][7]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[1][8]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[1][9]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[1][10]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[1][11]}</button></div>
           <div style={gridOuter}></div>

           <div style={gridOuter}>🏰</div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[2][1]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[2][2]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[2][3]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[2][4]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[2][5]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[2][6]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[2][7]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[2][8]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[2][9]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[2][10]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[2][11]}</button></div>
           <div style={gridOuter}></div>

           <div style={gridOuter}>3</div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[3][1]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[3][2]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[3][3]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[3][4]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[3][5]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[3][6]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[3][7]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[3][8]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[3][9]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[3][10]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[3][11]}</button></div>
           <div style={gridOuter}></div>

           <div style={gridOuter}>4</div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[4][1]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[4][2]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[4][3]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[4][4]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[4][5]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[4][6]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[4][7]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[4][8]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[4][9]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[4][10]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[4][11]}</button></div>
           <div style={gridOuter}></div>

           <div style={gridOuter}>5</div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[5][1]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[5][2]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[5][3]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[5][4]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[5][5]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[5][6]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[5][7]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[5][8]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[5][9]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[5][10]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[5][11]}</button></div>
           <div style={gridOuter}></div>

           <div style={gridOuter}>6</div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[6][1]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[6][2]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[6][3]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[6][4]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[6][5]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[6][6]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[6][7]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[6][8]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[6][9]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[6][10]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[6][11]}</button></div>
           <div style={gridOuter}></div>

           <div style={gridOuter}>7</div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[7][1]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[7][2]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[7][3]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[7][4]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[7][5]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[7][6]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[7][7]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[7][8]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[7][9]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[7][10]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[7][11]}</button></div>
           <div style={gridOuter}></div>

           <div style={gridOuter}>8</div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[8][1]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[8][2]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[8][3]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[8][4]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[8][5]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[8][6]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[8][7]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[8][8]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[8][9]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[8][10]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[8][11]}</button></div>
           <div style={gridOuter}></div>

           <div style={gridOuter}>9</div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[9][1]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[9][2]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[9][3]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[9][4]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[9][5]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[9][6]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[9][7]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[9][8]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[9][9]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[9][10]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[9][11]}</button></div>
           <div style={gridOuter}></div>

           <div style={gridOuter}>10</div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[10][1]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[10][2]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[10][3]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[10][4]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[10][5]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[10][6]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[10][7]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[10][8]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[10][9]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[10][10]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[10][11]}</button></div>
           <div style={gridOuter}>🏰</div>

           <div style={gridOuter}>11</div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[11][1]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[11][2]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[11][3]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[11][4]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[11][5]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[11][6]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[11][7]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[11][8]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[11][9]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[11][10]}</button></div>
           <div style={gridItem}><button className="square" onClick={() => this.handleClick(i)} style={gridItem}>{this.state.gameSystem._data[11][11]}</button></div>
           <div style={gridOuter}></div>

           <div style={gridOuter}></div>
           <div style={gridOuter}>A</div>
           <div style={gridOuter}>B</div>
           <div style={gridOuter}>C</div>
           <div style={gridOuter}>D</div>
           <div style={gridOuter}>E</div>
           <div style={gridOuter}>F</div>
           <div style={gridOuter}>G</div>
           <div style={gridOuter}>H</div>
           <div style={gridOuter}>I</div>
           <div style={gridOuter}>J</div>
           <div style={gridOuter}>K</div>
           <div style={gridOuter}></div>

         </div>

      </div>

    );
  }
}
export default Gameboard;
