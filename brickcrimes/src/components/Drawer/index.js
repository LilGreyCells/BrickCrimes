import React, { Component } from 'react'
import './style.css'
import Line from '../../assets/line.png'
import PieChart from 'react-minimal-pie-chart'

export default class Drawer extends Component {
  constructor() {
    super()
    this.state = {
      className: 'drawer',
      drawerOpen: false
    }
  }

  toggleDrawer = () => {
    !this.state.drawerOpen ?
      this.setState({ drawerOpen: true, className: 'drawer open' }) :
      this.setState({ drawerOpen: false, className: 'drawer' });
  }

  render() {
    return (
      <div className={this.state.className} onClick={this.toggleDrawer}>
        <img src={Line} alt='Line' class='line' />

        <PieChart
          data={[
            { title: 'One', value: 10, color: 'red' },
            { title: 'Two', value: 15, color: 'blue' },
            { title: 'Three', value: 20, color: 'green' }
          ]}
          // label={function noRefCheck() {}}
          label=''
          labelPosition={50}
          labelStyle={{
            fill: '#121212',
            fontFamily: 'sans-serif',
            fontSize: '15px'
          }}
          className='pieChart'
        />
      </div>
    )
  }
}
