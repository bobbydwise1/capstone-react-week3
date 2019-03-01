import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as math from 'mathjs';
import PropTypes from 'prop-types';

function createSquareGrid(n) {
  let answer = [];
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      answer.push("<div class='grid-item'>",y,'-',x,"</div>")
    }
  }
  return answer;
}

function Gameboard(){
  const compBox = {
    border: "solid blue",
    backgroundColor: "light yellow",
    padding: "20px"
  }

  const gridContainer = {
    display: "grid",
    height: "400px",
    width: "520px",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    gridColumnGap: "0px",
    gridRowGap: "0px",
    backgroundColor: "light grey",
    border: "solid darkGrey",
    margin: "auto",
    textAlign:  "center"
  }

  const gridItem = {
    backgroundColor: "lightGrey",
    border: "solid black",
    broderWidth: "0px",
    textAlign:  "center"
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

  const gameSystem = math.matrix([
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,'♙','♙','♙','♙','♙','♙','♙','♙','♙','♙','♙',1],
    [1,'♖','♘','♗','⚓','☆','♔','☆','⚓','♗','♘','♖',1],
    [1,'🐘',0,'⛰',0,'☄',0,'☄',0,'⛰',0,'🐘',1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
  ]);

  //React method to render a grid via loop

  return (
    <div style={compBox}>
      <h1>GAMEBOBARD</h1>

       <div style={gridContainer}>
         <div style={gridItem}>{gameSystem._data[0][0]}</div>
         <div style={gridItem}>{gameSystem._data[0][1]}</div>
         <div style={gridItem}>{gameSystem._data[0][2]}</div>
         <div style={gridItem}>{gameSystem._data[0][3]}</div>
         <div style={gridItem}>{gameSystem._data[0][4]}</div>
         <div style={gridItem}>{gameSystem._data[0][5]}</div>
         <div style={gridItem}>{gameSystem._data[0][6]}</div>
         <div style={gridItem}>{gameSystem._data[0][7]}</div>
         <div style={gridItem}>{gameSystem._data[0][8]}</div>
         <div style={gridItem}>{gameSystem._data[0][9]}</div>
         <div style={gridItem}>{gameSystem._data[0][10]}</div>
         <div style={gridItem}>{gameSystem._data[0][11]}</div>
         <div style={gridItem}>{gameSystem._data[0][12]}</div>

         <div style={gridItem}>{gameSystem._data[1][0]}</div>
         <div style={gridItem}>{gameSystem._data[1][1]}</div>
         <div style={gridItem}>{gameSystem._data[1][2]}</div>
         <div style={gridItem}>{gameSystem._data[1][3]}</div>
         <div style={gridItem}>{gameSystem._data[1][4]}</div>
         <div style={gridItem}>{gameSystem._data[1][5]}</div>
         <div style={gridItem}>{gameSystem._data[1][6]}</div>
         <div style={gridItem}>{gameSystem._data[1][7]}</div>
         <div style={gridItem}>{gameSystem._data[1][8]}</div>
         <div style={gridItem}>{gameSystem._data[1][9]}</div>
         <div style={gridItem}>{gameSystem._data[1][10]}</div>
         <div style={gridItem}>{gameSystem._data[1][11]}</div>
         <div style={gridItem}>{gameSystem._data[1][12]}</div>

         <div style={gridItem}>{gameSystem._data[2][0]}</div>
         <div style={gridItem}>{gameSystem._data[2][1]}</div>
         <div style={gridItem}>{gameSystem._data[2][2]}</div>
         <div style={gridItem}>{gameSystem._data[2][3]}</div>
         <div style={gridItem}>{gameSystem._data[2][4]}</div>
         <div style={gridItem}>{gameSystem._data[2][5]}</div>
         <div style={gridItem}>{gameSystem._data[2][6]}</div>
         <div style={gridItem}>{gameSystem._data[2][7]}</div>
         <div style={gridItem}>{gameSystem._data[2][8]}</div>
         <div style={gridItem}>{gameSystem._data[2][9]}</div>
         <div style={gridItem}>{gameSystem._data[2][10]}</div>
         <div style={gridItem}>{gameSystem._data[2][11]}</div>
         <div style={gridItem}>{gameSystem._data[2][12]}</div>

         <div style={gridItem}>{gameSystem._data[3][0]}</div>
         <div style={gridItem}>{gameSystem._data[3][1]}</div>
         <div style={gridItem}>{gameSystem._data[3][2]}</div>
         <div style={gridItem}>{gameSystem._data[3][3]}</div>
         <div style={gridItem}>{gameSystem._data[3][4]}</div>
         <div style={gridItem}>{gameSystem._data[3][5]}</div>
         <div style={gridItem}>{gameSystem._data[3][6]}</div>
         <div style={gridItem}>{gameSystem._data[3][7]}</div>
         <div style={gridItem}>{gameSystem._data[3][8]}</div>
         <div style={gridItem}>{gameSystem._data[3][9]}</div>
         <div style={gridItem}>{gameSystem._data[3][10]}</div>
         <div style={gridItem}>{gameSystem._data[3][11]}</div>
         <div style={gridItem}>{gameSystem._data[3][12]}</div>

         <div style={gridItem}>{gameSystem._data[4][0]}</div>
         <div style={gridItem}>{gameSystem._data[4][1]}</div>
         <div style={gridItem}>{gameSystem._data[4][2]}</div>
         <div style={gridItem}>{gameSystem._data[4][3]}</div>
         <div style={gridItem}>{gameSystem._data[4][4]}</div>
         <div style={gridItem}>{gameSystem._data[4][5]}</div>
         <div style={gridItem}>{gameSystem._data[4][6]}</div>
         <div style={gridItem}>{gameSystem._data[4][7]}</div>
         <div style={gridItem}>{gameSystem._data[4][8]}</div>
         <div style={gridItem}>{gameSystem._data[4][9]}</div>
         <div style={gridItem}>{gameSystem._data[4][10]}</div>
         <div style={gridItem}>{gameSystem._data[4][11]}</div>
         <div style={gridItem}>{gameSystem._data[4][12]}</div>

         <div style={gridItem}>{gameSystem._data[5][0]}</div>
         <div style={gridItem}>{gameSystem._data[5][1]}</div>
         <div style={gridItem}>{gameSystem._data[5][2]}</div>
         <div style={gridItem}>{gameSystem._data[5][3]}</div>
         <div style={gridItem}>{gameSystem._data[5][4]}</div>
         <div style={gridItem}>{gameSystem._data[5][5]}</div>
         <div style={gridItem}>{gameSystem._data[5][6]}</div>
         <div style={gridItem}>{gameSystem._data[5][7]}</div>
         <div style={gridItem}>{gameSystem._data[5][8]}</div>
         <div style={gridItem}>{gameSystem._data[5][9]}</div>
         <div style={gridItem}>{gameSystem._data[5][10]}</div>
         <div style={gridItem}>{gameSystem._data[5][11]}</div>
         <div style={gridItem}>{gameSystem._data[5][12]}</div>

         <div style={gridItem}>{gameSystem._data[6][0]}</div>
         <div style={gridItem}>{gameSystem._data[6][1]}</div>
         <div style={gridItem}>{gameSystem._data[6][2]}</div>
         <div style={gridItem}>{gameSystem._data[6][3]}</div>
         <div style={gridItem}>{gameSystem._data[6][4]}</div>
         <div style={gridItem}>{gameSystem._data[6][5]}</div>
         <div style={gridItem}>{gameSystem._data[6][6]}</div>
         <div style={gridItem}>{gameSystem._data[6][7]}</div>
         <div style={gridItem}>{gameSystem._data[6][8]}</div>
         <div style={gridItem}>{gameSystem._data[6][9]}</div>
         <div style={gridItem}>{gameSystem._data[6][10]}</div>
         <div style={gridItem}>{gameSystem._data[6][11]}</div>
         <div style={gridItem}>{gameSystem._data[6][12]}</div>

         <div style={gridItem}>{gameSystem._data[7][0]}</div>
         <div style={gridItem}>{gameSystem._data[7][1]}</div>
         <div style={gridItem}>{gameSystem._data[7][2]}</div>
         <div style={gridItem}>{gameSystem._data[7][3]}</div>
         <div style={gridItem}>{gameSystem._data[7][4]}</div>
         <div style={gridItem}>{gameSystem._data[7][5]}</div>
         <div style={gridItem}>{gameSystem._data[7][6]}</div>
         <div style={gridItem}>{gameSystem._data[7][7]}</div>
         <div style={gridItem}>{gameSystem._data[7][8]}</div>
         <div style={gridItem}>{gameSystem._data[7][9]}</div>
         <div style={gridItem}>{gameSystem._data[7][10]}</div>
         <div style={gridItem}>{gameSystem._data[7][11]}</div>
         <div style={gridItem}>{gameSystem._data[7][12]}</div>

         <div style={gridItem}>{gameSystem._data[8][0]}</div>
         <div style={gridItem}>{gameSystem._data[8][1]}</div>
         <div style={gridItem}>{gameSystem._data[8][2]}</div>
         <div style={gridItem}>{gameSystem._data[8][3]}</div>
         <div style={gridItem}>{gameSystem._data[8][4]}</div>
         <div style={gridItem}>{gameSystem._data[8][5]}</div>
         <div style={gridItem}>{gameSystem._data[8][6]}</div>
         <div style={gridItem}>{gameSystem._data[8][7]}</div>
         <div style={gridItem}>{gameSystem._data[8][8]}</div>
         <div style={gridItem}>{gameSystem._data[8][9]}</div>
         <div style={gridItem}>{gameSystem._data[8][10]}</div>
         <div style={gridItem}>{gameSystem._data[8][11]}</div>
         <div style={gridItem}>{gameSystem._data[8][12]}</div>

         <div style={gridItem}>{gameSystem._data[9][0]}</div>
         <div style={gridItem}>{gameSystem._data[9][1]}</div>
         <div style={gridItem}>{gameSystem._data[9][2]}</div>
         <div style={gridItem}>{gameSystem._data[9][3]}</div>
         <div style={gridItem}>{gameSystem._data[9][4]}</div>
         <div style={gridItem}>{gameSystem._data[9][5]}</div>
         <div style={gridItem}>{gameSystem._data[9][6]}</div>
         <div style={gridItem}>{gameSystem._data[9][7]}</div>
         <div style={gridItem}>{gameSystem._data[9][8]}</div>
         <div style={gridItem}>{gameSystem._data[9][9]}</div>
         <div style={gridItem}>{gameSystem._data[9][10]}</div>
         <div style={gridItem}>{gameSystem._data[9][11]}</div>
         <div style={gridItem}>{gameSystem._data[9][12]}</div>

         <div style={gridItem}>{gameSystem._data[10][0]}</div>
         <div style={gridItem}>{gameSystem._data[10][1]}</div>
         <div style={gridItem}>{gameSystem._data[10][2]}</div>
         <div style={gridItem}>{gameSystem._data[10][3]}</div>
         <div style={gridItem}>{gameSystem._data[10][4]}</div>
         <div style={gridItem}>{gameSystem._data[10][5]}</div>
         <div style={gridItem}>{gameSystem._data[10][6]}</div>
         <div style={gridItem}>{gameSystem._data[10][7]}</div>
         <div style={gridItem}>{gameSystem._data[10][8]}</div>
         <div style={gridItem}>{gameSystem._data[10][9]}</div>
         <div style={gridItem}>{gameSystem._data[10][10]}</div>
         <div style={gridItem}>{gameSystem._data[10][11]}</div>
         <div style={gridItem}>{gameSystem._data[10][12]}</div>

       </div>

    </div>
  );
}



export default Gameboard;
