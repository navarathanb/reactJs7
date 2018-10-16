import React, {Component} from 'react'
import Sticky from './Sticky'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stickies: [
                {
                    id: 0,
                    sticky: "Reminder at 5PM"
                },
                {
                    id: 1,
                    sticky: "Call James at 9PM"
                },
                {
                    id: 2,
                    sticky: "Write Notes"
                }

            ]
        }
        this.eachSticky = this.eachSticky.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this)
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
                {this.state.stickies.map(this.eachSticky)}
            </div>
        )
    }
}
export default App