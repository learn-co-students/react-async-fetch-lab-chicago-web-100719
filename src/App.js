// create your App component here
import React from 'react';
import { render } from 'enzyme';

class App extends React.Component{
    constructor(){
        super()
        this.state={
            people: []
        }
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp =>resp.json())
        .then(data => this.setState({
            people: data
        }))
    }

    render(){

        return <div>
            {}
        </div>
            
    }
    
}


export default App