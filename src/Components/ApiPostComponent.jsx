import axios from "axios";
import React, { Component } from "react";

class ApiPostComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            userid:'',
            id:'',
            title:'',
            body:''
        }
    }

    HandlChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handlesubmit = (event) =>{
        event.preventDefault()

        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then((Response)=>{
            console.log(Response.data);
        })
        .catch()

    }



    render(){

        const { userid, title, body } = this.state

        return(

        <form onSubmit={this.handlesubmit}>

            <div className="form-control">
                <label>UserId</label>
                <input type="text" name="userid" value={userid} onChange={this.HandlChange}/>
            </div>
 
            <div className="form-control">
                <label>Title</label>
                <input type="text" name="title" value={title} onChange={this.HandlChange}/>
            </div>

            <div className="form-control">
                <label>Body</label>
                <input type="text" name="body" value={body} onChange={this.HandlChange}/>
            </div>
            <button className="submit" type="submit">add to post</button>
        </form>

        )
    }
}

export default ApiPostComponent;