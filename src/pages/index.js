
import React, { Component }  from 'react';
import ReactMapGL from 'react-map-gl';


const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2hpdnJhanNoYXJtYTIxIiwiYSI6ImNrNzIzNjlxbzA1MngzZm53dGxrbXVheGIifQ.d5HraeRq8vDh-0nBiRGuhA';

class Map extends Component {
 
constructor(props){
  super(props);
  this.state = {
    viewport: {
      width: '100%',
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };
}

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={MAPBOX_TOKEN} />
    );
  }
}
export default Map;