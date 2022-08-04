
import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import MaponHold from '../../components/map/MaponHold' ;
import SidebarAgent from '../../components/sidebar/SidebarAgent';
import Navbar from '../../components/navbar/Navbar';
import './manageroutes.scss';
const VehicleonHold = () => {
  return (
    <div className="mroutes">
      <SidebarAgent />
      <div className="homeContainer">
       <Navbar />
      <MaponHold />
      </div>
    </div>
  )
}

export default VehicleonHold
