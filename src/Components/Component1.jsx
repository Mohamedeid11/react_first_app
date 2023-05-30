import React, { Component } from 'react'
import { UserConsumer } from './ContextComponent';

class Component1 extends Component {

  render() {
    return (
        <UserConsumer>
            {
                (Data) => {
                    return (
                        <h3>Your Data is {Data} From Component 1</h3>
                    )
                }
            }
        </UserConsumer>
    )
  }

}

export default Component1;