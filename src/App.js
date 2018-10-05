import React, { Component } from 'react';

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

      ]
    }
  }
  render() {
    return (
      <div className="main">
        <h1> {this.props.catagory} - {this.props.header}</h1>
        <h2>
          {this.props.tableName}  
        </h2>
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

App.defaultProps = {
  catagory: "Students cse batch",
  header: "SSVS Institute"
}


export default App;
