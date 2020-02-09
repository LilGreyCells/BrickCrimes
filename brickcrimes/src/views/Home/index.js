import React, { Component } from 'react'
import MapContainer from '../../components/Map'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
require('dotenv').config()


export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        
       <MapContainer />
       <SearchBar/>
       
      </div>
    )

  }
}
