import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      background : "orange"
    }
    this.update = this.update.bind(this);
  }
  componentDidMount() {
    //this is executed after the first render only on client side.
    alert("this is mounted just after first rendering")
  }
  componentWillMount() { 
    // this is executed before component is rendering.
    alert("This is about to mount in the compoent")
  }
 update() {
  this.setState({
    background:'green'
  })
 }
 componentWillUpdate() {
   alert("fun called before component rendering");
 }
 componentDidUpdate() {
   alert("fun called after component rendering");
 }

  render() {
    return (
      <div className="box" style = {this.state} onClick = {this.update}>

      </div>
    );
  }
}

export default App;
