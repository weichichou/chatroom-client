import React from 'react'
import superagent from 'superagent'
import Testbtn from './Testbtn'

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        jwt: ''
    }
    
    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        event.preventDefault()
        superagent
            .post('http://localhost:4000/login')
            .send(data)
            .then((res)=>{
                if(!res.body.jwt){
                    window.alert('Username or password is incorrect')
                }
                else{
                    window.alert('Welcome back!')
                    this.setState({jwt:res.body.jwt})
                }
                this.setState({
                    email: '',
                    password: ''
                })
            })
            .catch(_=>window.alert('Username or password is incorrect'))
            
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Email: 
                    <input onChange={this.handleChange} type='text' name='email' value={this.state.email} required/>
                </label>
                <label>Password: 
                    <input onChange={this.handleChange} type='password' name='password' value={this.state.password} required/>
                </label>
                <button>Login</button>
            </form>
            <Testbtn jwt={this.state.jwt}/>
            </div> 
        )
    }
}

export default Login