import React from 'react'
import "../style/style.css"

function FunctionalProps(props){
    console.log(props)
    const {fName , lName , age , email} = props;
    console.log(props)
    return(
            <div>
                <h1> Hi My Name is 
                    <span className="text-color"> {fName}</span>
                    <span className="text-color">  {lName}</span>
                    and I am
                    <span className="text-color"> {age} </span> 
                    and My E-Mail is 
                    <span className="text-color"> {email} </span> 
                </h1>
                {props.children}
            </div>

        )
    
}
    
export default FunctionalProps;


