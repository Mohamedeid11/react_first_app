// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import ClassProps from './Components/ClassProps';
// import Greeting from "./Components/Greeting1";
// import Test from './Components/Greeting2';
import './style/style.css';
// import FunctionalProps from './Components/FunctionalProps';
// import StateComponent from './Components/StateComponent';
// import Counter from './Components/Counter';
// import CounterClass from './Components/CounterClass';

// import DataComponent from './Components/DataComponent';

// import RegisterComponent from './Components/RegisterComponent';
// import LoginComponent from './Components/LoginComponent';

// import Component5 from './Components/Component5';
// import { UserProvider } from './Components/ContextComponent';
// import Component1 from './Components/Component1';

import ApiGetComponent from './Components/ApiGetComponent';
import ApiPostComponent from './Components/ApiPostComponent';



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
      {/* <h1>Counter From Function </h1>
      <Counter/> */}
      <br></br>
      {/* <h1>Counter From Class</h1> */}
      {/* <CounterClass> </CounterClass> */}
   
     {/* <DataComponent>

      </DataComponent> */}

{/*     Register and Login        */}
      {/* <RegisterComponent></RegisterComponent> */}

      {/* <LoginComponent></LoginComponent> */}

  {/* <UserProvider value = "Mohamed">
    
    <Component1></Component1>

  </UserProvider>  */}

  {/* <ApiGetComponent></ApiGetComponent> */}

  <ApiPostComponent></ApiPostComponent>

    </div>
  );
}

export default App;
