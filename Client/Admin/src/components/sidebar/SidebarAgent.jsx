import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsRailwayOutlinedIcon from '@mui/icons-material/DirectionsRailwayOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import {Link} from 'react-router-dom';
//import {useContext} from 'react';
//import {DarkModeContext} from "../../context/darkModeContext";
const SidebarAgent = () => {
    //const {dispatch} = useContext(DarkModeContext)
    return (
        <div className="sidebar">
            
            <div className="top">
                <Link to ="/agentt" style={{textDecoration:"none"}}>
                <span className="logo">Agent</span>
                </Link>
                
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to ="/agentt" style={{textDecoration:"none"}}>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Overview</span>
                    </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/assign" style={{textDecoration:"none"}}>
                    <li>
                        <AssignmentOutlinedIcon className="icon" />
                        <span>Driver Assignment</span>
                    </li>   
                    </Link>
                                    
                    <Link to ="/agentt/map" style={{textDecoration:"none"}}>
                    <li>
                        <DirectionsBusIcon className="icon"/>
                        <span>Manage Routes</span>
                    </li>
                    </Link>
                    
                    <Link to ="/comment" style={{textDecoration:"none"}}>
                    <li>
                        <CommentOutlinedIcon className="icon" />
                        <span>Coment review</span>
                    </li>
                    </Link>
                    
                    
                    
                    <p className="title">ACCOUNT</p>
                    
                    <Link  to ="/ssingle" style={{textDecoration:"none"}}>
                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    </Link>
                    
                    <Link  to ="/alogin" style={{textDecoration:"none"}}>
                    <li>
                        <LogoutIcon className="icon"/>
                        <span>Logout</span>
                    </li> 
                    </Link> 
                    
                </ul>
            </div>
            
        </div>
    )
}

export default SidebarAgent
/*
<p className="title">USEFUL</p> 
                    <li>
                        <QueryStatsIcon className="icon" />
                        <span>Stats</span>
                    </li> 
                    <li>
                        <NotificationsActiveIcon className="icon" />
                        <span>Notifications</span>
                    </li> 
                    ....
                    <li>
                        <VpnKeyOutlinedIcon className="icon"/>
                        <span>Logs</span>
                    </li> 
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    
                    

                <Link to ="/agentt/onhold" style={{textDecoration:"none"}}>
                    <li>
                        <DirectionsRailwayOutlinedIcon className="icon"/>
                        <span>Vehicles on Hold</span>
                    </li>
                    </Link>
<li>
                        <SettingsOutlinedIcon className="icon"/>
                        <span>Settings</span>
                    </li> 


                    */