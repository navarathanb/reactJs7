import React, {Component} from 'react'
import Sticky from './Sticky'
import FaPlus from 'react-icons/lib/fa/plus'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stickies: []
        }
        this.eachSticky = this.eachSticky.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.add = this.add.bind(this);
        this.nextId = this.nextId.bind(this);
    }
    update(newText, i) {
        this.setState( prevState => ({
            stickies: prevState.stickies.map(sticky => (sticky.id !== i) ? sticky: {...sticky, sticky: newText})
        }))
    }    
    remove(id){
        this.setState( prevState => ({
            stickies : prevState.stickies.filter( sticky => sticky.id !== id)
        }))
    }
    add(text){
        this.setState( prevState => ({
            stickies: [
                ...prevState.stickies, {
                    id: this.nextId(),
                    sticky: text
                }
            ]
        }))
    }
    nextId() {
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }
    eachSticky(sticky,i) {
        return (
            <Sticky key = {i} index = {i} 
            onChange = {this.update}
            onRemove = {this.remove}
            >
                {sticky.sticky}
            </Sticky>
        )
    }


    render() {
        return (
            <div className = "stickies">
                <button id="plus" onClick = {this.add.bind(null,"New Note")}><FaPlus /> </button>
                {this.state.stickies.map(this.eachSticky)}
            </div>
        )
    }
}
export default App