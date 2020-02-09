import React, { Component } from 'react'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import MapContainer from '../../components/Map'
import Drawer from '../../components/Drawer'
require('dotenv').config()

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <MapContainer />
        <Drawer />
      </div>
    )
  }
}
