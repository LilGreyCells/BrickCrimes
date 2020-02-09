import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map google={this.props.google}
        initialCenter={{
            lat: 43.0845,
            lng: -77.675,
          }}
          styles = {[
          {"featureType":"all","elementType":"labels.icon","stylers":[{"lightness":"85"}]}]
    }
          zoom={16}
            onClick={this.onMapClicked}>
          <Marker onClick={this.onMarkerClick}
                 
                  name={'Current location'}
                  icon={{
                      url: "http://www.advancedorthogonal.com/wp-content/uploads/2017/03/map-pin.png",
                      scaledSize:new this.props.google.maps.Size(48,48)
                     
                      }} />
   
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
      )
    }
  }

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GMAPS_API_KEY)
  })(MapContainer)