import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { MapPin } from 'react-feather'

let mapkey = 'AIzaSyBTy_IfEdOC5i855VrYId3Rki6gflFgfgc'
if (process.env.NETLIFY_MAP_KEY) {
  mapkey = process.env.NETLIFY_MAP_KEY
}

class GoogleMap2 extends Component {
  static defaultProps = {
    center: {
      lat: 42.377195,
      lng: 21.148395
    },
    zoom: 14
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapkey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={42.377195} lng={21.148395} text={'Rimi Com'} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMap2

const Marker = () => {
  return (
    <div style={{ color: 'orange' }}>
      <MapPin />
    </div>
  )
}
