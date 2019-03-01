import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function ChatBox(){
  const compBox = {
    border: "solid violet",
    padding: "20px"
  }
  return (
    <div>
    <h1 style={compBox}>CHATBOX</h1>
    </div>
  );
}

export default ChatBox;
