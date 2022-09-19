import AdminSideBar from './adminsidebar'
import AdminNavBar from './adminnavbar';
import "./Dashboard.css";
import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from 'react-router-dom';

import "./Dashboard.css";
import axios from 'axios';
import { toast } from 'react-toastify';
const AdminAgentsDetails = () => {
  let location=useLocation();
  const Navigate=useNavigate();
  const [token, setToken] = useState(sessionStorage.getItem("token_ADMIN"));

  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  useEffect(()=>{
   
  if(!token)
  {
    toast.error("Unauthorized access please login first")
    Navigate("/signin")
  }
},[])
let admin=location.state.admin
let agent=location.state.agent

    return(
        <div className="dashboard d-flex">
    	<div>
      	<AdminSideBar admin={admin}/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"auto"}}>
        <AdminNavBar adminName={admin.firstName}/>
        <h1 >Agent Details:</h1>
       
        <center>
            <h1>{agent.firstName} { agent.lastName}</h1>
             <br />

        <table className='table'  style={{width:'60%',border:'2px',borderBlockStyle:'solid'}}>
  <tbody style={styles.myfont}>
   
    <tr>
    <td>Mobile Number</td>
                  <td>{ agent.phoneNumber}</td>
    </tr>
    <tr>
    <td>Email ID</td>
                  <td>{ agent.email}</td>
    </tr>
    <tr>
    <td>Date of Birth</td>
                  <td>{ agent.dateOfBirth}</td>
    </tr>
    <tr>
    <td>PinCode</td>
                  <td>{ agent.address.pincode}</td>
    </tr>
    <tr>
    <td>AddressLine1</td>
                  <td>{ agent.address.addressLine1}</td>
    </tr>
    <tr>
    <td>AddressLine2</td>
                  <td>{ agent.address.addressLine2}</td>
    </tr>
    <tr>
    <td>Village</td>
                  <td>{ agent.address.village}</td>
    </tr>
    <tr>
    <td>City</td>
                  <td>{ agent.address.city}</td>
    </tr>
    <tr>
    <td>State</td>
                  <td>{ agent.address.state}</td>
    </tr>
    <tr>
    <td>Pan Card </td>
                  <td>{ agent.pan}</td>
                            </tr>
                            <tr>
                            
      <td>Adhar Card</td>
                  <td>{ agent.aadhar}</td>
    
    </tr>
    </tbody>
                    </table>
                </center>
                <center>
                <Link to='/adminagents' className='btn btn-success '  
                state={{admin:admin}}
                style={{
                backgroundColor: "#FFCB08",
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
                marginRight:50,
              }}>Back to Agents</Link> 
               <Link to='/adminAgentsCustomers' className='btn btn-success' 
                state={{admin:admin,agent:agent}}
               style={{
                backgroundColor: "#FFCB08",
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
              }}>Check Customers</Link>   
              
                </center>
        </div>
        </div>
    )
}
export default AdminAgentsDetails
const styles={
    myfont: {
        textDecoration: "none",
        fontWeight: "bold",
        textAlign:"left",
      },
}