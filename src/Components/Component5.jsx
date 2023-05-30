import React,{ Component } from 'react'
import Component3 from './Component3';
import { UserConsumer } from './ContextComponent';

 class Component5 extends Component {

  render() {
    return (
        <div>
        <UserConsumer>
            {
                (Data) => {
                    return (
                        <h3>Your Data is {Data} From Component 5 </h3>

                        
                    )
                }
            }
        </UserConsumer>


        <Component3 />    

    </div>    

    )
  }
}

export default Component5;