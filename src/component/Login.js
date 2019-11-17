import React from 'react'
import superagent from 'superagent'

class Login extends React.Component {
    state = {
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
            .post('http://localhost:4000/login')
            .send(this.state)
            .then((res)=>{
                if(!res.body.jwt){
                    window.alert('Username or password is incorrect')
                }
                else{
                    window.alert('Welcome back!')
                }
            })
            .catch(_=>window.alert('Username or password is incorrect'))
            
        this.setState({
            email: '',
            password: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Email: 
                    <input onChange={this.handleChange} type='text' name='email' value={this.state.email} required/>
                </label>
                <label>Password: 
                    <input onChange={this.handleChange} type='password' name='password' value={this.state.password} required/>
                </label>
                <button>Login</button>
            </form>
        )
    }
}

export default Login