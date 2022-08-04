import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import SidebarAgent from '../../components/sidebar/SidebarAgent';
import Widget from '../../components/widget/Widget';
import {Link} from 'react-router-dom';
import "./home.scss";
const Homer = () => {
    return (
        <div className="home">
            <SidebarAgent />
            <div className="homeContainer">
                <Navbar />
                
            </div>
        </div>
    )
}

export default Homer
/*
<div className="widgets">
                <Link to ="/agentt/map" style={{textDecoration:"none"}}>
                    <Widget type="orders"/>
                </Link>
                <Link to ="/agentt/map" style={{textDecoration:"none"}}>
                    <Widget type="earnings"/>
                </Link>
                <Link to ="/agentt/onhold" style={{textDecoration:"none"}}>
                    <Widget type="balance"/>
                </Link>        
                </div>
*/
