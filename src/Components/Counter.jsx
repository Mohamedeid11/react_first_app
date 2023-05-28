import React, { useState } from 'react';
import "../style/style.css"


function Counter(){

    let [counter ,setNumber] = useState(1);;

    function increment(){
        setNumber(counter + 1) 
        counter+= 1;
        // console.log(counter)ddd

    }

    function decrement(){

        if(counter > 1){
            setNumber(counter - 1)
            // console.log(counter)
        }
    }

    return(
            <div>
                <div className="counter center">
                    <button onClick={() => increment ()} className="increment" >+</button>
                    <div className="count">{counter}</div>
                    <button onClick={() => decrement()} className="decrement" >-</button>
                </div>                          
            </div>
        )
    
}
    
export default Counter;


