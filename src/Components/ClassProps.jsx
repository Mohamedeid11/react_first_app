import {Component} from "react";
import "../style/style.css"

class ClassProps extends Component {

    render (){
        const {course1 , course2 }  = this.props;
        console.log(this.props.children);
        return(
            <div>
                <h1> My First course
                    <span className="text-color"> {course1} </span>
                    My second  course
                    <span className="text-color"> {course2} </span> 

                </h1>
                {this.props.children}
            </div>

        )
    }
}
    
export default ClassProps;


