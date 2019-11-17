import React from 'react';
import './App.css';
import Signup from './component/Signup'
import Login from './component/Login'
import TestSecreat from './component/TestSecret';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Chatroom</h1>
      <Signup />
      &nbsp;
      <Login />
      
      <Route path='/secret' component={TestSecreat} />
    </div>
  );
}

export default App;
