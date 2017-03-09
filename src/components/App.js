import React, {Component} from 'react'
import BaseMap from './BaseMap/BaseMap'

class App extends Component {
  render () {
    console.log(this.props)
    return (
      <div className='app'>
        <p>hello world</p>
        <BaseMap />
      </div>
    )
  }
}

export default App
