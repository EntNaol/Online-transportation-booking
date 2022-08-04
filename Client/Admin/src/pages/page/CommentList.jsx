/*
import React, {Component} from 'react';
import SidebarAgent from '../../components/sidebar/SidebarAgent';
import Navbar from '../../components/navbar/Navbar';
import "./table.scss" ;
import Axios from "axios";
const Comment = props =>(
    <tr>
        <td>{props.commentt.comment}</td>
        <td>{props.commentt.email}</td>
        <td>{props.commentt.role}</td>
        
    </tr>
)

export default class CommentList extends Component{
    constructor(props){
        super(props);
        this.state={driver: []}
    }
    componentDidMount(){
        Axios.get('http://localhost:3001/comment/getComments')
        .then(response =>{
            this.setState({
                comment: response.data
            })
            .catch((error) =>{
                console.log(error);
            })
        })
    }
    commentList(){
        return this.state.comment.map(currentcomment =>{
            return <Comment commentt={currentcomment}  key={currentcomment._id} />
        })
    }
render(){
 
    return (
        <div className="db">
            <SidebarAgent />
            <div className="dbq">
                <Navbar />
                <h3>List of Comments</h3>
                <table className="styled-table">
                <tbody>
                        <tr>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Comment</th>
                            
                        </tr>
                        {this.commentList()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
   
}
*/
import React, {Component} from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import "./table.scss" ;
import Axios from "axios";
import SidebarAgent from '../../components/sidebar/SidebarAgent';
//import DrUpd from './DrUpd';
const Comment = props =>(
    <tr>
        
        <td>{props.ddriver.role}</td>
        <td>{props.ddriver.comment}</td>
        <td>{props.ddriver.email}</td>
        
    </tr>
)

export default class CommentList extends Component{
    constructor(props){
        super(props);
        this.deleteDriver = this.deleteDriver.bind(this)
        this.state={driver: []}
    }
    componentDidMount(){
        Axios.get('http://localhost:3001/comment/getComments')
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
        Axios.delete('http://localhost:3001/comment/'+id)
        .then(response =>{
            console.log(response.data)
        })
        this.setState({
            driver: this.state.driver.filter(el => el._id !==id)
        })
    }
    driverList(){
        return this.state.driver.map(currentdriver =>{
            return <Comment ddriver={currentdriver} deleteDriver={this.deleteDriver} key={currentdriver._id} />
        })
    }
render(){
 
    return (
        <div className="db">
            <SidebarAgent />
            <div className="dbq">
                <Navbar />
                <h3>List of Comments</h3>
                <table className="styled-table">
                <tbody>
                        <tr>
                            <th>Role</th>
                            
                            <th>Comment</th>
                            <th>Email</th>
                        </tr>
                        {this.driverList()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
   
}
















