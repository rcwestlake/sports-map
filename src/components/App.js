import React, {Component} from 'react'
import BaseMap from './BaseMap/BaseMap'

class App extends Component {
  componentDidMount () {
    const { getTeams } = this.props
    getTeams('baseball')
  }

  render () {
    return (
      <div className='app'>
        <h1>Sports Map</h1>
        <BaseMap />
      </div>
    )
  }
}

export default App
