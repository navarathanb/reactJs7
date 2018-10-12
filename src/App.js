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
    }
    eachSticky(sticky,i) {
        return (
            <Sticky key = {i} index = {i} >
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