// create your App component here
import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      spacefolk: []
    }
  }



  render() {
    return (
      <ul>
        {this.state.spacefolk.map(folk => <li>{folk.name} -- {folk.craft}</li>)}
      </ul>
    )
  }


  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        spacefolk: json.people
      })
    })
  }
}