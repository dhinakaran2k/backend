import React, {Component} from "react";
import Navber from '../Navber/Navber';
import Footer from '../Footer';
import axios from 'axios';
class Appointment extends Component{
    constructor() {
        super()
        this.state = {
          first_name: '',
          last_name: '',
          email: '',
          address: '',
          phone_no: '',
          dateTime: '',
          disease: '',
          errors: {}
        }
    
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
      onSubmit(e) {
        e.preventDefault()
    
        const newUser = {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          address: this.state.address,
          phone_no: this.state.phone_no,
          dateTime: this.state.dateTime,
          disease: this.state.disease,
        }
        if(newUser.first_name!=='' && newUser.last_name!=='' && newUser.email!=='' && newUser.address!=='' && newUser.phone_no!=='' && newUser.dateTime!=='' && newUser.disease!=='')
        {console.log(newUser)
        axios.post('/appointment/register', newUser)
          .then(res => {
            if (res.data==="success"){alert("Appoinment booked sucessfully")}
            console.log("res",res);
          })} 
        else{alert('Some fields are missing')}
      }    
    render(){
        return(
        <div className="body">
            <Navber />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit} >
                  <h1 className="h3 mb-3 font-weight-normal btn-rg">Appointment Booking</h1>
                  <div className="form-group">
                    <label htmlFor="name">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="first_name"
                      placeholder="Enter your first name"
                      value={this.state.first_name}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="last_name"
                      placeholder="Enter your last name"
                      value={this.state.last_name}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      placeholder="Enter your Resident Address"
                      value={this.state.address}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone_no"
                      placeholder="Enter your Phone Number"
                      value={this.state.phone_no}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Date and Time</label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      name="dateTime"
                      placeholder="Enter your Phone Number"
                      value={this.state.dateTime}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">disease</label>
                    <input
                      type="text"
                      className="form-control"
                      name="disease"
                      placeholder="Enter your disease"
                      value={this.state.disease}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Register!
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <Footer />
          </div>
        )
    }
}
export default Appointment;