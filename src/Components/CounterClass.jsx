import {Component} from "react";
import "../style/style.css"

class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter : 1,
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

    }

    increment = () => {
        this.setState({
            counter : this.state.counter + 1,
        })

    }


    decrement = () =>{

        if(this.state.counter > 1){
            this.setState({
                counter : this.state.counter - 1,
            })
        }
    }

    render (){

        return(
            <div>
                <div className="counter center">
                    <button onClick={ this.increment } className="increment" >+</button>
                    <div className="count">{this.state.counter}</div>
                    <button onClick={this.decrement} className="decrement" >-</button>
                </div>   
            </div>

        )
    }
}
    
export default CounterClass;


