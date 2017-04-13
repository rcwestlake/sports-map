import React, { PropTypes } from 'react'
import { Marker, Tooltip } from 'react-leaflet'
import { icon } from 'leaflet'
import baseball from './images/baseball.png'
import football from './images/football.png'
import hockey from './images/hockey.png'
import soccer from './images/soccer.png'
import basketball from './images/basketball.png'

const Pin = ({ name, sport, lat, long }) => {
  let dot
  switch (sport) {
    case 'baseball':
      dot = baseball
      break
    case 'football':
      dot = football
      break
    case 'hockey':
      dot = hockey
      break
    case 'soccer':
      dot = soccer
      break
    case 'basketball':
      dot = basketball
      break
    default:
      console.error('no sport in switch statement')
      break
  }

  const pinIcon = icon({
    iconUrl: dot,
    popupAnchor: [0, -20],
    iconSize: [30, 42],
    iconAnchor: [14, 20]
  })
  return (
    <Marker
      position={[lat, long]}
      icon={pinIcon}
      riseOnHover
    >
      <Tooltip
        sticky
        interactive
      >
        <div>
          <p>{name} ({sport})</p>
        </div>
      </Tooltip>
    </Marker>
  )
}

Pin.propTypes = {
  name: PropTypes.string
}

export default Pin
