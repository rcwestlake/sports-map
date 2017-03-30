import React, { PropTypes } from 'react'
import { Marker, Popup, Tooltip } from 'react-leaflet'
import { icon } from 'leaflet'
import dot from './images/baseball.png'

const Pin = ({ name, sport, lat, long }) => {
  const pinIcon = icon({
    iconUrl: dot,
    popupAnchor: [0, -5]
  })
  return (
    <Marker
      position={[lat, long]}
      icon={pinIcon}
    >
      <Popup>
        <div>
          <p>{name}</p>
          <p>{sport}</p>
        </div>
      </Popup>
    </Marker>
  )
}

Pin.propTypes = {
  name: PropTypes.string
}

export default Pin
