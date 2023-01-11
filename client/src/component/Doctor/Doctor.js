import React, { Component } from 'react';
import Navber from './DocNavbar';
import axios from 'axios';
import Footer from '../Footer';
import 'mdbreact';
import './style.css'
class Doctor extends Component {
  constructor(){
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      salary: '',
      shift_time: '',
      specialisation: '',
      id:'',
      isLoading: true,
      appoint:{},
      patients: []
    } 
  }
  
  componentDidMount(){
    axios.get('/doctor/profile',{
      headers: {
        authorization: sessionStorage.getItem('usertoken')
      }
    })
      .then(res => {
        const details = res.data[0];
        this.setState({
          first_name: details.first_name,
          last_name: details.last_name,
          email: details.email,
          address: details.address,
          salary: details.salary,
          shift_time: details.shift_time,
          specialisation: details.specialisation,
          id: details.doctor_id
        })
      });
    
    axios.get('/doctor/patient',{
      headers: {
        authorization: sessionStorage.getItem('usertoken')
      }
    })
      .then(res => {
        this.setState({patients: res.data});
        this.setState({isLoading: false});
      })

  }

    render() { 
      const { patients, isLoading} = this.state;
        return ( 
        <div className ="bg-dark">
            <Navber />
            <br/>
            <h2 className="text-white" align="center">Doctor</h2>
            <h3 className="text-white" align="center">Welcome!</h3>
            <br></br>
                 
        <div className="row">
        <div className="col">
        <div className="container ml-3">
    <div className="jumbotron mt-5" style ={{backgroundColor:"#e0e0e0"}}>
      <div className="col-sm-6">
        <h2 className="text-primary">Doctor Information</h2>
      </div>
      <br/>

      <table className="table col-md-6" >
        <tbody>
          <tr>
            <td> Name</td>
            <td>
              {this.state.first_name} {this.state.last_name}
            </td>
          </tr>
          <tr>
          <td>Specialization</td>
              <td>{this.state.specialisation}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{this.state.email}</td>
          </tr>
          <tr>
          <td>Address</td>
          <td>{this.state.address}</td>
        </tr>
        <tr>
        <td>Salary Information</td>
            <td>{this.state.salary}</td>
        </tr>

        <tr>
        <td>Shift Time</td>
            <td>{this.state.shift_time}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>

  <div className="col mr-3">
  <div className="jumbotron mt-5" style ={{backgroundColor:"#e0e0e0"}}>
  <h2 className="text-primary">Patients Assigned</h2>
  <br />
  <div className="list-group-flush" style ={{backgroundColor:"#e0e0e0"}}>
  
  <table id="tab">
    <thead>
      <tr>
        <th>app_id</th><th>first_name</th><th>last_name</th><th>email</th><th>phone_no</th><th>dateandtime</th><th>disease</th>
      </tr>
    </thead>
  {!isLoading ? patients.map(patient => {
    return (
      <tr>
        <td>{patient.app_id}</td>
        <td>{patient.firstname}</td>
        <td>{patient.lastname}</td>
        <td>{patient.email}</td>
        <td>{patient.phone_no}</td>
        <td>{patient.dateandtime}</td>
        <td>{patient.disease}</td>
      </tr>
    )
    }) : <h4>Loading</h4>}
  </table>
  </div>

  </div>
</div>
<br/>
</div>
<Footer/>
  </div>
        );
    }
}
 
export default Doctor;