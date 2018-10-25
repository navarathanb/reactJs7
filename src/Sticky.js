import React, { Component } from 'react';
import './App.css';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';
import FaFloppyO from 'react-icons/lib/fa/floppy-o';


class Sticky extends Component {
 constructor(props) {
   super(props)
   this.state = {
     editing: false
   }
   
   this.edit = this.edit.bind(this);
   this.remove = this.remove.bind(this);
   this.save = this.save.bind(this);
   this.renderForm = this.renderForm.bind(this);
   this.renderDisplay = this.renderDisplay.bind(this);
  }
  
  componentWillMount() {
    this.style = {
      right: this.randomVal(0, window.innerWidth-150, 'px'),
      top: this.randomVal(0,window.innerHeight -150, 'px'),
      transform: `rotate($(this.randomVal(-25, 25, 'deg')))`
    }
  }

  randomVal(x, y, s) {
    return x + Math.ceil( Math.random() * (y-x) ) + s
    //0+0.2343423 * (1350-0)+'px' = 235 
  }


  edit() {
    this.setState({
      editing: true
    })
  }
  remove()
  {
    // alert("Note deleting");
    this.props.onRemove(this.props.index)
  }
  save(e) {
    // alert(this.newText.value);
    e.preventDefault();
    this.props.onChange(this.newText.value, this.props.index)
    this.setState({
      editing: false
    })
  }
  renderForm() {
    return(
      <div className = "note" style = {this.style}>
        <form onSubmit = {this.save}>
          <textarea id="textarea" ref={input => this.newText = input} />
          <button id="save"><FaFloppyO /></button>
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
      <div className ='note' style = {this.style}>
        <p>{this.props.children}</p>
        <p>{this.props.index}</p>
        {/* <img src={this.props.image} className="img"> */}
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

export default Sticky;
