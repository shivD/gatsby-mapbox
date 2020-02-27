import React, { Component } from "react"
import ReactMapGL from "react-map-gl"
import StickyBox from "react-sticky-box";
import Select from 'react-select';

const MAPBOX_TOKEN ="pk.eyJ1Ijoic2hpdnJhanNoYXJtYTIxIiwiYSI6ImNrNzIzNjlxbzA1MngzZm53dGxrbXVheGIifQ.d5HraeRq8vDh-0nBiRGuhA"

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        width: "100%",
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 12,
      },
      selectedOption: null,
      
    }
  }
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <>
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
      <div className="row" style={{display:'flex', width:'100%'}}>
    <StickyBox offsetTop={20} offsetBottom={20}>
      <div>https://react-sticky-box.codecks.io/examples-complex</div>
      http://jsfiddle.net/danield770/hwpa0uk1/9/
    </StickyBox>
    <div><Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      /></div>
  </div>
      </>
    )
  }
}
export default Map
