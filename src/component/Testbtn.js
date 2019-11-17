import React from 'react';
import superagent from 'superagent'
import {Redirect} from 'react-router-dom'

export default class Testbtn extends React.Component{
    state = {
        redirect: false
    }
    
    renderRedirect = () => {
        if (this.state.redirect === true){
            return <Redirect to='/secret' /> 
        }
    }

    handleClick = (event) => {
        superagent
            .get('http://localhost:4000/secret')
            .set('Authorization', `Bearer ${this.props.jwt}`)
            .send()
            .then((res)=>{
                console.log(res)
                this.setState({redirect: true})
            })
    }
    
    render(){
        return(
            <div>
                {this.renderRedirect()}
                <button onClick={this.handleClick}>Go to secret endpoint</button>
            </div>
            
        )
    }
}