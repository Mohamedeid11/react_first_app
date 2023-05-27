// import logo from './logo.svg';
import React from 'react';
import './App.css';
import ClassProps from './Components/ClassProps';
// import Greeting from "./Components/Greeting1";
// import Test from './Components/Greeting2';
import './style/style.css';


function App() {
  return (
    <div className="App">
      {/* <Greeting></Greeting>
      <Test></Test> */}
      <ClassProps course1="First Course" course2="Second Course" >
        <h6 className='props-chiled'>i am a chiled for Props Class</h6>
      </ClassProps>

    </div>
  );
}

export default App;
