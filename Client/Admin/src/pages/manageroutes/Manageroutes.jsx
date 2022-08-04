
import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxMap from '../../components/map/MapboxMap';
import SidebarAgent from '../../components/sidebar/SidebarAgent';
import Navbar from '../../components/navbar/Navbar';
import './manageroutes.scss';
const Manageroutes = () => {
  return (
    <div className="mroutes">
      <SidebarAgent />
      <div className="homeContainer">
       <Navbar />
      < MapboxMap />
      </div>
    </div>
  )
}

export default Manageroutes
