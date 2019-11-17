import React from 'react';
import './App.css';
import Signup from './component/Signup'
import Login from './component/Login'

function App() {
  return (
    <div className="App">
      <h1>Chatroom</h1>
      <Signup />
      &nbsp;
      <Login />
    </div>
  );
}

export default App;
