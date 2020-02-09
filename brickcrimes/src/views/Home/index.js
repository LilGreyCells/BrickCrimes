import React, { Component } from 'react'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import MapContainer from '../../components/Map'
import Drawer from '../../components/Drawer'
require('dotenv').config()

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
     location:"LOMB MEMORIAL DRIVE"
    }
  }
  componentDidMount()
  {
    fetch('https://brickcrimes.herokuapp.com')
  .then(function(response) {
    return response.json();
  })
  .then((myJson)=> {
  this.setState({data:myJson},()=>{console.log(this.state.data)})
    console.log(this.state.location)
    
  }
  )
}
  render() {
    return (
      <div>
        <Header />
        <MapContainer />
        <SearchBar />
        <Drawer location={this.state.location} data={this.state.data}/>
      </div>
    )
  }
}
