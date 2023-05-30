import React, { Component } from 'react'

class RegisterComponent extends Component {

    constructor(props) {
        super(props)
        this.state={
            username: '',
            name:'',
            email:'',
            password:''
        }
    }


    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleFormSubmit= (event) => {
        alert(`UserName is : ${this.state.username}, name is: ${this.state.name}, password: ${this.state.password} your email: ${this.state.email}`)
        event.preventDefault()

    }


  render() {
    const { username, name, email , password} = this.state
    return (
        <div>

        

            <form className='form' onSubmit={this.handleFormSubmit}>
                <h1> Register</h1>
                
                <div>
                    <label>Username</label>
                    <input type="text" name='username' value={username} onChange={this.handleChange} required/>
                </div>

                <div>
                    <label>name</label>
                    <input type="text" name='name' value={name} onChange={this.handleChange} required/>
                </div>

                <div>
                    <label>email</label>
                    <input type="email" name='email' value={email} onChange={this.handleChange} required/>
                </div>

                <div>
                    <label>password</label>
                    <input type="password" name='password' value={password} onChange={this.handleChange} required/>
                </div>

                <button className='submit' type='submit'>Submit</button>
            </form>
        </div>
    )
  }
}

export default RegisterComponent;
