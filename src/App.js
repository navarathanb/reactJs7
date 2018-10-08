import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'james'
    }
    this.setStateUpdate = this.setStateUpdate.bind(this);
    this.createNewUser = this.createNewUser.bind(this);
  };
  setStateUpdate(e){
    this.setState({name: e.target.value})
  }
  createNewUser(){
    this.setState({name:''});
   
  }
  render() {
   
    return (
      <div>
        <h2>Welcome to my site</h2>
        <input type="text" value = {this.state.name} onChange = {this.setStateUpdate}/>
        < input type="submit" value="New User" onClick = {this.createNewUser} />
        <h3>{this.state.name =='james'?'Welcome default user: James' : 'Welcome New User: '+this.state.name}</h3>
      </div>
    );
  }
}

export default App;
