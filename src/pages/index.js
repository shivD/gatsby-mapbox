import React from "react"
import mapboxgl from "mapbox-gl"
import Layout from "../components/layout"
import AOS from 'aos';
import 'aos/dist/aos.css';



mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
class Map extends React.Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
    })
    AOS.init()
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: "absolute",
      top: 0,
      bottom: 0,
      width: "100%",
    }

    return(
      <Layout>
     <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" style={{height:'400px', position:'relative'}}><div style={style} ref={el => (this.mapContainer = el)}></div></div> 
     </Layout>
    )
    
  }
}
export default Map
