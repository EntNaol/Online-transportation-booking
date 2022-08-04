import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
//import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
//import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import {useContext} from 'react';
import {DarkModeContext} from "../../context/darkModeContext";

const Navbar = () => {
    const {dispatch} = useContext(DarkModeContext)
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">

                    
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon className="icon" />
                        English                       
                    </div>
                    <div className="item" onClick={()=>dispatch({type:"TOGGLE"})}> 
                        <DarkModeOutlinedIcon className="icon" />     
                    </div>
                    
                    <div className="item">
                        <div className="counter"></div>                  
                    </div>
                    
                    <div className="item">
                        <img src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"   
                        alt=""
                        className="avatar"   
                    />               
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
/*
<div className="item">
                        <ChatBubbleOutlineIcon className="icon"  /> 
                        <div className="counter">2</div>                
                    </div>
<SearchIcon />
                    <input type="text" placeholder="Search..."/>

                        <NotificationsNoneIcon className="icon"  />
                     
*/