import React, { Proptypes } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import './base-map.css'
import './leaflet.css'

const position = [51.505, -0.09]

const BaseMap = () => {
  return (
    <section className='map-container'>
      <Map className='map' center={position} zoom={13}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </section>
  )
}

BaseMap.propTypes = {

}

export default BaseMap
