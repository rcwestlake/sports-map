import React, {Component} from 'react'
import BaseMap from './BaseMap/BaseMap'

class App extends Component {
  componentDidMount () {

  }

  render () {
    console.log(this.props)
    return (
      <div className='app'>
        <p>Sports Map</p>
        <BaseMap />
      </div>
    )
  }
}

export default App
