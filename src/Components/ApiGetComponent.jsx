import axios from 'axios'
import React,{ Component } from 'react'


class ApiGetComponent extends Component{

    constructor(props){
        super(props)
        this.state={
        posts:[]
    }}

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            this.setState({
                posts : response.data
            })
        })
        .catch()
    }

    render(){
        return(
            <div>
                <h1> Api Posts </h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">body</th>
                        </tr>
                    </thead>
                    <tbody>

                {

                    this.state.posts.map((post)=>(
                        
                        <tr key={post.id}>
                            <th scope="row">{post.id}</th>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>

                    ))

                }


                    </tbody>
                </table>

            </div>
        )
    }
}


export default ApiGetComponent;