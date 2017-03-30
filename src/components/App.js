import React, { Component } from 'react'
import BaseMap from './BaseMap/BaseMap'
import Pin from './Pin/Pin.js'

class App extends Component {
  componentDidMount () {
    const { getTeams } = this.props
    getTeams('baseball')
  }

  render () {
    const list = this.props.teamsData.handleTeams.get('teams')
    const teams = list.size && list.map((team, i) => {
      return <Pin
        name={team.get('team')}
        sport={team.get('sport')}
        lat={team.get('lat')}
        long={team.get('long')}
        key={i}
      />
    })
    return (
      <div className='app'>
        <h1>Sports Map</h1>
        <BaseMap teams={teams} />
      </div>
    )
  }
}

export default App
