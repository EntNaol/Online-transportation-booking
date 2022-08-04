import React, {Component} from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import "./table.scss" ;
import Axios from "axios";
//import DrUpd from './DrUpd';
const Driver = props =>(
    <tr>
        <td>{props.ddriver.fullname}</td>
        <td>{props.ddriver.email}</td>
        <td>
            <Link className='button1' to={"/update/:id"+props.ddriver._id}>Edit</Link> | <a className='button2' href="#" onClick={() => {props.deleteDriver(props.ddriver._id)}}>Delete</a>
        </td>
    </tr>
)

export default class DriverList extends Component{
    constructor(props){
        super(props);
        this.deleteDriver = this.deleteDriver.bind(this)
        this.state={driver: []}
    }
    componentDidMount(){
        Axios.get('http://localhost:3001/driver/getDrivers')
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
        Axios.delete('http://localhost:3001/driver/'+id)
        .then(response =>{
            console.log(response.data)
        })
        this.setState({
            driver: this.state.driver.filter(el => el._id !==id)
        })
    }
    driverList(){
        return this.state.driver.map(currentdriver =>{
            return <Driver ddriver={currentdriver} deleteDriver={this.deleteDriver} key={currentdriver._id} />
        })
    }
render(){
 
    return (
        <div className="db">
            <Sidebar />
            <div className="dbq">
                <Navbar />
                <h3>List of Drivers</h3>
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








