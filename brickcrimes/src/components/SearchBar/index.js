import React, { Component } from 'react'
import './style.css'
import searchIcon from '../../assets/search.png'

export default class SearchBar extends Component {
  render() {
    return (
      <div className='searchBar'>
        <img src={searchIcon} alt='searchIcon' className='searchIcon' />
        <div className='searchInputContainer'>
          <input
            type='text'
            placeholder='Search here'
            className='searchInput'
          />
        </div>
      </div>
    )
  }
}
