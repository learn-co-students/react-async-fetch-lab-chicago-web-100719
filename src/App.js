import React from 'react'

class App extends React.Component {
  render() {
    return <div></div>
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(astros => console.log(astros))
  }

}

export default App