import React, { Proptypes } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import './base-map.css'
import './leaflet.css'

const position = [39.50, -98.35]

const BaseMap = () => {
  return (
    <section className='map-container'>
      <Map className='map' center={position} zoom={4.5}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </section>
  )
}

export default BaseMap
