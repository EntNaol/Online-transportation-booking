import React, {Component} from 'react';
import axios from 'axios';
import SidebarAgent from '../../components/sidebar/SidebarAgent';
import Navbar  from '../../components/navbar/Navbar';
import "./dbtrial.scss";

export default class DrUpd extends Component{
  constructor(props){
    super(props);
    this.onChangeHours= this.onChangeHours.bind(this);
    this.onChangeRoute = this.onChangeRoute.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      
      route: '',
      workingHours: '',
      driver:[]
    }
  }
  
  componentDidMount(){
    axios.get('http://localhost:3001/driver/getDrivers')
    .then(response =>{
        this.setState({
            //driver: response.data
            route: response.data.rote,
            workingHours: response.data.workingHours
        })
        .catch((error) =>{
            console.log(error);
        })
    })
}

  /*
  componentDidMount(){
    axios.get('http://localhost:3001/driver/getDrivers'+this.props.match.params.id)
    .then(response => {
      this.setState({
        name: response.data.name,
        email: response.data.email,
        phone: response.data.phone,
        address: response.data.address,
        country: response.data.country
      })
    })
    .catch(function(error){
      console.log(error)
    })  
  }
*/
  
  onChangeRoute(e){
    this.setState({
      route: e.target.value
    })
  }
  onChangeHours(e){
    this.setState({
      workingHours: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    const driver={
      
      route:this.state.route,
      workingHours: this.state.workingHours
    }
    console.log(driver)
    console.log(driver._id)
    axios.put('http://localhost:3001/driver/:id',driver )
    .then(res => console.log(res.data))
    .catch((error) =>{
      console.log(error);
  })
  
  //
  }
  render(){
    return(
      <div className="db">
            <SidebarAgent />
            <div className="dbq">
              <Navbar />
              <h3>Edit Driver</h3>
              <form onSubmit={this.onSubmit}>
                  
                  
                  <div className="formInput">
                    <label>Route:</label>
                    <input type="text"
                    required
                    
                    value={this.state.route}
                    onChange={this.onChangeRoute}
                    />
                  </div>
                  <div className="formInput">
                    <label>Working Hours:</label>
                    <input type="text"
                    required
                    
                    value={this.state.workingHours}
                    onChange={this.onChangeHours}
                    />
                  </div>
                  <div className="formInput">
                    
                  <input type="submit" value="Edit Driver"  />
                  </div>
              </form>
            </div>
      </div> 
    )
  }
}
//