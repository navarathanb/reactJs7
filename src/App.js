import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
    if(e.target.value.length == 0 ){
      ReactDOM.findDOMNode(this.refs.error).innerHTML = 'Please enter name';
    }
    else{
      ReactDOM.findDOMNode(this.refs.error).innerHTML ='' ;
      
    }
    this.setState({name: e.target.value})
    
  }
  createNewUser(){
    this.setState({name:''});
    ReactDOM.findDOMNode(this.refs.error).innerHTML = "Please enter name";
    ReactDOM.findDOMNode(this.refs.error).style.color = 'red';
    ReactDOM.findDOMNode(this.refs.inp).focus();

  }
  render() {
   
    return (
      <div>
        <h2>Welcome to my site</h2>
        <div ref='error'></div>
        <input type="text" value = {this.state.name} onChange = {this.setStateUpdate} ref='inp'/>
        < input type="submit" value="New User" onClick = {this.createNewUser} />
        <h3>{this.state.name =='james'?'Welcome default user: James' : 'Welcome New User: '+this.state.name}</h3>
      </div>
    );
  }
}

export default App;
