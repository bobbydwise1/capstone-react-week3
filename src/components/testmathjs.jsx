import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as math from 'mathjs';

function TestMathJS(){
  const compBox = {
    border: "solid black",
    backgroundColor: "light yellow"
  }
  let array1 = math.matrix([[1,2],[3,4]]);
  let array2 = math.matrix([[10],[20]]);
  let answer = math.multiply(array1,array2);

  return (
    <div style={compBox}>
      <h1>YOu made it! Math JS yeah.</h1>
      <h4>{answer.index} {answer.props}</h4>
    </div>
  )
}

export default TestMathJS;
