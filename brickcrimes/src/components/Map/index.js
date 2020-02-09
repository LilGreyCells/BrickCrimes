import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import './style.css'
export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 43.0845,
          lng: -77.675
        }}
        styles={[
          {
            featureType: 'all',
            elementType: 'labels.icon',
            stylers: [{ lightness: '85' }]
          }
        ]}
        zoom={16}
        onClick={this.onMapClicked}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Current location'}
          icon={{
            url:
              'https://raw.githubusercontent.com/LilGreyCells/BrickCrimes/master/brickcrimes/src/assets/marker.png',
            scaledSize: new this.props.google.maps.Size(48, 48)
          }}
          animation={this.props.google.maps.Animation.DROP}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div className='infoWindow'>
            <h1 className='number'>1240</h1>
            <h2 className='reports'>reports</h2>
            {console.log(this.state.selectedPlace)}
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMAPS_API_KEY
})(MapContainer)
