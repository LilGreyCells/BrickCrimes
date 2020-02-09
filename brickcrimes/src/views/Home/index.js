import React, { Component } from 'react'
import MapContainer from '../../components/Map'
require('dotenv').config()
export default class Home extends Component {
  render() {
    return <MapContainer></MapContainer>
  }
}
