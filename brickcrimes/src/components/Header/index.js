import React, { Component } from 'react'
import '../../index.css'
import './style.css'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1 className='title'>
          <span>Brick</span>Crimes
        </h1>
      </div>
    )
  }
}
