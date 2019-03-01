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
    backgroundColor: "light yellow"
  }

  const gridContainer = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridColumnGap: "2px",
    gridRowGap: "2px",
    backgroundColor: "light grey",
    border: "dark grey",
    boxShadow: "5px 5px grey",
    margin: "10px"
  }

  const gridItem = {
    backgroundColor: "light grey",
    border: "light grey"
  }

  const gameSystem = math.matrix([
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
  ]);



  //React method to render a grid via loop

  return (
    <div style={compBox}>
      <h1>GAMEBOBARD</h1>

        <div class="grid-container">
          {createSquareGrid(3).toString()}
       </div>

       <div style={gridContainer}>
         <div style={gridItem}>1</div>
         <div style={gridItem}>2</div>
         <div style={gridItem}>3</div>
         <div style={gridItem}>4</div>
         <div style={gridItem}>5</div>
         <div style={gridItem}>6</div>
         <div style={gridItem}>7</div>
         <div style={gridItem}>8</div>
         <div style={gridItem}>9</div>
       </div>

    </div>
  );
}



export default Gameboard;
