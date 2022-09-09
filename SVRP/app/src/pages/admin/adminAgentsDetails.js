import CustomerSideBar from './adminsidebar'
import CustomerNavBar from './adminnavbar';
import "./Dashboard.css";
import { Link } from 'react-router-dom';
const AdminAgentsDetails =()=>{
    return(
        <div className="dashboard d-flex">
    	<div>
      	<CustomerSideBar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        <CustomerNavBar/>
        <h1 >Details:</h1>
       
        <center>
             <h1>AgentName</h1>
             <br />

        <table className='table'  style={{width:'60%',border:'2px',borderBlockStyle:'solid'}}>
  <tbody style={styles.myfont}>
    <tr>
      <td><h4>Agent Name</h4></td>
      <td><h4>Sagar</h4></td>
    </tr>
    <tr>
      <td>Adhar Card</td>
      <td>4444 3333 2222 1111</td>
    </tr>
    <tr>
    <td>Mobile Number</td>
      <td>9579260490</td>
    </tr>
    <tr>
    <td>Email ID</td>
      <td>rrp@gmail.com</td>
    </tr>
    <tr>
    <td>Date of Birth</td>
      <td>11/02/1996</td>
    </tr>
    <tr>
    <td>Address</td>
      <td>Pune</td>
    </tr>
    <tr>
    <td>Pan Card </td>
      <td>pancard.pdf</td>
                            </tr>
                            <tr>
    <td>Premium</td>
      <td>2000 rps</td>
    </tr>
    </tbody>
                    </table>
                </center>
                <center>
                <Link to='/adminAgentsCustomersDetails' className='btn btn-success'  style={{
                backgroundColor: "#FFCB08",
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
              }}>View Customer List</Link>   
              
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