import logo from './logo.svg';
import React from 'react';
import './App.css';
import Greeting from "./Components/Greeting1";
import Test from './Components/Greeting2';


function App() {
  return (
    <div className="App">
      <Greeting></Greeting>
      <Test></Test>
    </div>
  );
}

export default App;
