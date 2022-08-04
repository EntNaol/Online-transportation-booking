/*
import React, {Component} from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
//import { Link } from 'react-router-dom';
import "./dbtrial.scss" ;
import Axios from "axios";
//import DrUpd from './DrUpd';
const User = props =>(
    <tr>
        <td>{props.uuser.fullName}</td>
        <td>{props.uuser.email}</td>
        
    </tr>
)

export default class UserList extends Component{
    
    componentDidMount(){
        Axios.get('http://localhost:3001/user/getUsers')
        .then(response =>{
            this.setState({
                user: response.data
            })
            .catch((error) =>{
                console.log(error);
            })
        })
    }
    
    userList(){
        return this.state.user.map(currentuser =>{
            return <User uuser={currentuser}  key={currentuser._id} />
        })
    }
render(){
 
    return (
        <div className="db">
            <Sidebar />
            <div className="dbq">
                <Navbar />
                <h3>List of Users</h3>
                <table>
                <tbody>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            
                        </tr>
                        {this.userList()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
   
}
*/
import React, {Component} from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import "./table.scss" ;
import Axios from "axios";
//import DrUpd from './DrUpd';
const User = props =>(
    <tr>
        <td>{props.ddriver.firstName}</td>
        <td>{props.ddriver.email}</td>
        <td>
            <a className='button2' href="#" onClick={() => {props.deleteDriver(props.ddriver._id)}}>Delete</a>
        </td>
    </tr>
)

export default class UserList extends Component{
    constructor(props){
        super(props);
        this.deleteDriver = this.deleteDriver.bind(this)
        this.state={driver: []}
    }
    componentDidMount(){
        Axios.get('http://localhost:3001/user/getUsers')
        .then(response =>{
            this.setState({
                driver: response.data
            })
            .catch((error) =>{
                console.log(error);
            })
        })
    }
    deleteDriver(id){
        Axios.delete('http://localhost:3001/user/'+id)
        .then(response =>{
            console.log(response.data)
        })
        this.setState({
            driver: this.state.driver.filter(el => el._id !==id)
        })
    }
    driverList(){
        return this.state.driver.map(currentdriver =>{
            return <User ddriver={currentdriver} deleteDriver={this.deleteDriver} key={currentdriver._id} />
        })
    }
render(){
 
    return (
        <div className="db">
            <Sidebar />
            <div className="dbq">
                <Navbar />
                <h3>List of Users</h3>
                <table className="styled-table">
                <tbody>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                        {this.driverList()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
   
}
















