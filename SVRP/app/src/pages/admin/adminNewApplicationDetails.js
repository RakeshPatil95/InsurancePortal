import CustomerSideBar from './adminsidebar'
import CustomerNavBar from './adminnavbar';
import "./Dashboard.css";
const AdminNewApplicationDetails =()=>{
    return(
        <div className="dashboard d-flex">
    	<div>
      	<CustomerSideBar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        <CustomerNavBar/>
        <h1 >Details:</h1>
       
        <center>
             <h1>Policy Name</h1>
             <br />

        <table className='table'  style={{width:'60%',border:'2px',borderBlockStyle:'solid'}}>
  <tbody style={styles.myfont}>
    <tr>
      <td><h4>Policy ID</h4></td>
      <td><h4>123456</h4></td>
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
                <table className='table' style={{ width: '60%' }}>
                    <tr>
                        <td>
                            <button className='btn btn-success mt-4' style={{ width: '350px', borderRadius: '15px',backgroundColor:'green' }}>Accept</button>
                        </td>
                        <td>
                            <button className='btn btn-danger mt-4' style={{ width: '350px', borderRadius: '15px',backgroundColor:'red' }}>Reject</button>
                            </td>
                        </tr>
                </table>
                </center>
        </div>
        </div>
    )
}
export default AdminNewApplicationDetails
const styles={
    myfont: {
        textDecoration: "none",
        fontWeight: "bold",
        textAlign:"left",
      },
}