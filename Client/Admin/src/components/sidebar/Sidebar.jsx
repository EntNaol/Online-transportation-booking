import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
//import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import {Link} from 'react-router-dom';
//import {useContext} from 'react';
//import {DarkModeContext} from "../../context/darkModeContext";
const Sidebar = () => {
    //const {dispatch} = useContext(DarkModeContext)
    return (
        <div className="sidebar">
            
            <div className="top">
                <Link to ="/" style={{textDecoration:"none"}}>
                <span className="logo">Administrator</span>
                </Link>
                
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to ="/home" style={{textDecoration:"none"}}>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    </Link>

                    
                    
                    <p className="title">LISTS</p>
                    <Link to ="/trial" style={{textDecoration:"none"}}>
                    <li>
                        <PersonOutlinedIcon className="icon" />
                        <span>Users</span>
                    </li>
                    </Link>
                    
                    <Link to ="/list" style={{textDecoration:"none"}}>
                    <li>
                        <DriveEtaOutlinedIcon className="icon" />
                        <span>Driver Report</span>
                    </li>
                    </Link>
                    
                    
                    <p className="title">USER</p>
                    
                    
                    <Link to ="/drivers/single" style={{textDecoration:"none"}}>
                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>Profile</span>
                    </li> 
                    </Link>
                   
                    <Link to ="/login" style={{textDecoration:"none"}}>
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

export default Sidebar
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




                <Link to="/vlist" style={{textDecoration:"none"}}>
                    <li>
                        <DirectionsBusIcon className="icon" />
                        <span>Vehicle Report</span>
                    </li>
                    
                    </Link>
                    


                <li>
                        <SettingsOutlinedIcon className="icon"/>
                        <span>Settings</span>
                    </li> 


                    */