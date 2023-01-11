import React, { Component } from 'react';

class Footer extends Component {
    
    render() { 
        return (   
          
          <footer className="page-footer font-small   pt-4 default-color">

  
        <div className="container-fluid text-center text-md-left">
      
          
          <div className="row">
      
            
            <div className="col-md-6 mt-md-0 mt-3">
      
              
              <h5 className="text-uppercase font-weight-bold">Contact us:</h5>
              <p>EMAIL: stlhospital@gmail.com</p>
              <p>Phone no: 987654321</p>
      
            </div>
            
      
            <hr className="clearfix w-100 d-md-none pb-3"/>
      
            
            <div className="col-md-6 mb-md-0 mb-3">
      
             
              <h5 className="text-uppercase font-weight-bold">Address:</h5>
              <p> No 25 HSR layout banglore karnataka 560016</p>
      
            </div>
           
      
                           </div>
         
      
                          </div>
        
                      <div className="footer-copyright text-center py-3 default-color-dark">© 2022 Copyright:
                          <span> stlhospitalltd.com</span>
                      </div>
        
            </footer> );
    }
}
 
export default Footer;