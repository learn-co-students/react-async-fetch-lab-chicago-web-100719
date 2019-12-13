// create your App component here
import React from 'react'

class App extends React.Component {

    constructor(){
        super()

        this.state = {
            people: []
        }
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(peopleObj => this.setState({
            people: peopleObj
        }))
    }


    render(){
        return(
            <h1>yo</h1>
        )
    }
}

export default App