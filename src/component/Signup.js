import React from 'react'
import superagent from 'superagent'

class Signup extends React.Component {
    state = {
        username: '',
        email: '',
        password: ''
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        superagent
            .post('http://localhost:4000/signup')
            .send(this.state)
            .then(_ => window.alert('Signed up successfully!'))
            //TO-DO:
            //Redirect to login page
        this.setState({
            username: '',
            email: '',
            password: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Username: 
                    <input onChange={this.handleChange} type='text' name='username' value={this.state.username} required/>
                </label>
                <label>Email: 
                    <input onChange={this.handleChange} type='text' name='email' value={this.state.email} required/>
                </label>
                <label>Password: 
                    <input onChange={this.handleChange} type='text' name='password' value={this.state.password} required/>
                </label>
                <button>Sign up</button>
            </form>
        )
    }
}

export default Signup