import React, { Component } from 'react';
import './App.css';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';
import FaFloppyO from 'react-icons/lib/fa/floppy-o';


class App extends Component {
 constructor(props) {
   super(props)
   this.state = {
     editing: false
   }
   
   this.edit = this.edit.bind(this);
   this.remove = this.remove.bind(this);
   this.save = this.save.bind(this);
  }
  edit() {
    this.setState({
      editing: true
    })
  }
  remove()
  {
    alert("Note deleting");
  }
  save() {
    alert(this.newText.value);
  }
  renderForm() {
    return(
      <div className = "note">
        <form>
          <textarea id="textarea" ref={input => this.newText = input} />
          <button onClick = {this.save} id="save"><FaFloppyO /></button>
        </form>
      </div>
    )
  }
  // function(input) {
  //   this.newText = input
  //   return newText;
  // }
  renderDisplay() {
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
  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay()
  }

}

export default App;
