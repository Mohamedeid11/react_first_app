import {Component} from "react";
import "../style/style.css"

class StateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isloggedIn : false,
            subscription : "Guest",
        };
        this.ChangeState = this.ChangeState.bind(this);

    }

    ChangeState(){
        this.setState({
            isloggedIn : true,
            subscription : 'You now have a subscription'
        })
    }

    render (){

        return(
            <div>
                <h4> login status {this.state.isloggedIn.toString()}</h4>
                <h1> Subscription status <span className="text-color"> {this.state.subscription} </span></h1>
                <button onClick={this.ChangeState}>Click Me</button>
            </div>

        )
    }
}
    
export default StateComponent;


