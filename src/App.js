// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import ClassProps from './Components/ClassProps';
// import Greeting from "./Components/Greeting1";
// import Test from './Components/Greeting2';
import './style/style.css';
// import FunctionalProps from './Components/FunctionalProps';
// import StateComponent from './Components/StateComponent';
import Counter from './Components/Counter';
import CounterClass from './Components/CounterClass';


function App() {
  return (
    <div className="App">
      {/* <Greeting></Greeting>
      <Test></Test> */}

      {/* Props Class */}
      {/* <ClassProps course1="First Course" course2="Second Course" >
        <h6 className='props-chiled'>i am a chiled for Props Class</h6>
      </ClassProps> */}

      {/* props function */}
      {/* <FunctionalProps fName="Mohamed" lName="Eid" age="27" email="m.mohamedeid"> 
        <h6 className='props-chiled'>i am a chiled for Functional Props </h6>
      </FunctionalProps> */}

      {/* State  */}
      {/* <StateComponent /> */}

      {/* Counter  */}
      <h1>Counter From Function </h1>
      <Counter/>
      <br></br>
      <h1>Counter From Class</h1>
      <CounterClass> </CounterClass>

    </div>
  );
}

export default App;
