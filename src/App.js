import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var name = "james";
    return (
      <div>
        <h2>Welcome to my site</h2>
        <h3>{name =='james'?'Welcome James' : 'Welcome User'}</h3>
      </div>
    );
  }
}

export default App;
