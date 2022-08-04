import {useContext} from 'react';
import {DarkModeContext} from "./context/darkModeContext";
import Home from "./pages/home/Home" ;
//import Login from "./pages/login/Login";
import ManageRoutes from "./pages/manageroutes/Manageroutes";
import VehicleonHold from "./pages/manageroutes/VehicleonHold";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import List from "./pages/dbtrial/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInPuts } from "./formSource";
import "./style/dark.scss";
import Homer from './pages/home/Homer';
import Driverreport from './pages/driverReport/Driverreport';
import VRtrial from './pages/dbtrial/VRtrial';
import DriverList from './pages/dbtrial/DriverList';
import DrUpd from './pages/dbtrial/DrUpd';
import VList from './pages/dbtrial/VList';
import Signup from './pages/dbtrial/Signup/Signup';
import Login from './pages/dbtrial/Login/Login';
import ASignup from './pages/dbtrial/ASignup/ASignup' ;
import ALogin from './pages/dbtrial/ALogin/ALogin';
import UserList from './pages/dbtrial/UserList';
import SSingle from "./pages/single/SSingle";
import AssignD from './pages/dbtrial/AssignD';
import CommentList from './pages/dbtrial/CommentList';
//import Driver from './pages/dbtrial/Driver';
//import AdminSignup from './pages/dbtrial/AdminSignup';
function App() {
  //const user = localStorage.getItem("token")
  const {darkMode} = useContext(DarkModeContext)
  const admin = localStorage.getItem("token");
  const agent = localStorage.getItem("token");
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
    <Routes>
    {admin && <Route path="/" exact element={<Home /> } />}
    <Route path="/signup" exact element={<Signup />} />
			<Route path="/home" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} /> 
			<Route path="/login" element={<Navigate replace to="/home" />} />

      {agent && <Route path="/aggent" exact element={<ALogin />} />}
      <Route path="/asignup" exact element={<ASignup />} />
      <Route path="/homer" exact element={<Homer />} />
      <Route path="/alogin" exact element={<ALogin />} />
			<Route path="/alogin" element={<Navigate replace to="/homer" />} />

      <Route path="upd/:id" element={<AssignD/>}></Route>
      <Route path="assign" element={<List/>}></Route> 
      <Route path="ssingle" element={<SSingle/>}></Route>
      <Route path="drivers">
        <Route path="single" element={<Single/>}></Route>
      </Route>
      <Route path="agentt" >
        <Route index element={<Homer/>}></Route>
        <Route path="map" element={<ManageRoutes/>}></Route>
        <Route path="onhold" element={<VehicleonHold/>}></Route>
        <Route path="vreport" element={<VRtrial/>} ></Route>
      </Route>
      <Route path="comment" element={<CommentList/>}></Route>
      <Route path="report" >
        <Route index element={<Driverreport/>}></Route>
      </Route>
      <Route path="trial" >
        <Route index element={<UserList/>}></Route>
      </Route>
      <Route path="list" >
        <Route index element={<DriverList/>}></Route>
      </Route>
      <Route path="vlist" >
        <Route index element={<VList/>}></Route>
      </Route>
      <Route path="/update" >
        <Route index element={<DrUpd/>}></Route>
      </Route>
    </Routes> 
  </BrowserRouter>,
     
    </div>
  );
}

export default App;
/*
<Route path="/" index element ={<Home />} />
      <Route path ="/" exact element ={<Navigate replace to="login"/>}/>
{admin && <Route path="/" exact element ={<Home />} />}
      <Route path ="/signup" exact element ={<AdminSignup />} />
      <Route path ="/login" exact element ={<Login/>}/>
      <Route path ="/" exact element ={<Navigate replace to="login"/>}/>
      <Route path="/" index element ={<Home />} />

       <Route path="users">
        <Route index element={<List/>}></Route>
        <Route path=":productId" element={<Single/>}></Route>
        <Route path="new" element={<New inputs={userInPuts} title={"Add New User"}/>}></Route>
      </Route>
*/
// 
//<Route path="new" element={<New inputs={productInputs} title="Add new driver"/>}></Route>
//<Route path ="/signup" exact element ={<AdminSignup />} />
//<Route path ="/login" exact element ={<Login/>}/>