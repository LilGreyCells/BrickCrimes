import React, { Component } from 'react'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
      </div>
    )
  }
}
