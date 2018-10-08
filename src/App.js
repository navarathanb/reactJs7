import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [
        {
          "name": "James",
          "id": 100,
          "email": "james@gmail.com",
          "mobile": 32423423
        },
        {
          "name": "Kishore",
          "id": 101,
          "email": "kishore@gmail.com",
          "mobile": 4534534534
        },
        {
          "name": "Patrick",
          "id": 102,
          "email": "partic@gmail.com",
          "mobile": 54654633
        },
        {
          "name": "Kumar",
          "id": 103,
          "email": "kumar@gmail.com",
          "mobile": 56456445
        }

      ],
      catagory: "Students cse batch",
      header: "SSVS Institute"

    }
    this.setStateUpdate = this.setStateUpdate.bind(this);//user definded function
    this.setForceUpdate = this.setForceUpdate.bind(this);
    this.setFindDomNode = this.setFindDomNode.bind(this);
  }
  setStateUpdate() {
    var name = "Students ECE Branch";
    this.setState({catagory : name}); // setState() is to update state data.
  }
  setForceUpdate() {
    this.forceUpdate();
  }

  setFindDomNode() {
    var h3access = document.getElementById("head");
    ReactDom.findDOMNode(h3access).style.background = "red";
  }

  render() {
    var mycss = {
      width: '150px',
      height: '35px',
      background: 'red',fontSize:'20px',
      color: 'white'
    }
    return (
      <div className="main">
        <input type="submit" value="setState" onClick = {this.setStateUpdate} style = {mycss} />
        <input type="submit" value="findDomNode" onClick = {this.setFindDomNode} style = {mycss} />
       

        {/* <h1> {this.state.catagory} - {this.state.header}</h1> */}
        <Headerdata cat = {this.state.catagory} head = {this.state.header}/> {/* calling the class*/}
        <h2>
          {this.props.tableName}  
        </h2>
        <h3 id="head">
          Square root of 3 : {Math.sqrt(3)}
        </h3>
        <table border="1">
          <tr><td>Name</td><td>Email</td><td>Mobile</td><td>Id</td></tr>
          {this.state.data.map((emp,ind) => <Table data = {emp} key={ind}/>)}
        </table>
      </div>
    );
  }
}
class Table extends React.Component {
  render(){
    return(
      <tr>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.email}</td>
        <td>{this.props.data.mobile}</td>
        <td>{this.props.data.id}</td>
      </tr>
    )
  }
}
class Headerdata extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.cat} - {this.props.head}</h1>
      </div>
    )
  }
}



export default App;
