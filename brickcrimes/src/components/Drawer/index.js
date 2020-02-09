import React, { Component } from 'react'
import './style.css'
import CloseButton from '../../assets/close.png'

export default class Drawer extends Component {
  constructor() {
    super()
    this.state = {
      className: 'drawer',
      drawerOpen: false
    }
  }

  toggleDrawer = () => {
    !this.state.drawerOpen &&
      this.setState({ drawerOpen: true, className: 'drawer open' })
  }

  render() {
    return (
      <div className={this.state.className} onClick={this.toggleDrawer}>
        <img
          src={CloseButton}
          className='closeButton'
          alt='close button'
          onClick={() =>
            this.setState({ drawerOpen: false, className: 'drawer' })
          }
        />
      </div>
    )
  }
}
