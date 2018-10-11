import React, { Component } from 'react';
import './App.css';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';


class App extends Component {
 constructor(props) {
   super(props) 
   this.edit = this.edit.bind(this);
   this.remove = this.remove.bind(this);
  }
  edit() {
    alert("Editing note");
  }
  remove()
{
  alert("Note deleting");
}
  render() {
    return (
      <div className ='note'>
        <p>Sticky Note</p>
        <span className ="btns">
            <button onClick = {this.edit} id="edit"><FaPencil /></button>
            <button onClick = {this.remove} id="remove"><FaTrash /></button>
        </span>
      </div>
    )
  }
}

export default App;
