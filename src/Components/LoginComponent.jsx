import React, { Component } from 'react'
class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state={
            username: '',
            password:''
        }
    }

    
    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit= (e) => {
        alert(`UserName is ${this.state.username}, password: ${this.state.password}`)
        e.preventDefault()
    }

    render() {
        const { username, password} = this.state
        return (
            <form className='form' onSubmit={this.handleFormSubmit}>
                <h1>Please Log In</h1>
                <div className='form-control'>
                    <label className='label' >Username:</label>
                    <input type="text"  name='username' value={username} onChange={this.handleChange} required />
                </div>

                <div className='form-control'>
                    <label className='label'>Password:</label>
                    <input type="password" name='password'  value={password} onChange={this.handleChange} required />
                </div>

                <button className='submit'  type='submit'>Log in </button>
            </form>
        )
      }
 }

export default LoginComponent;